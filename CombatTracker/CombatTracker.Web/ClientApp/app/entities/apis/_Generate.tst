${
	using Typewriter.Extensions.WebApi;
    using Typewriter.Extensions.Types;
    Template(Settings settings)
    {
        settings.OutputFilenameFactory = file => 
        {
            var FinalFileName = file.Name.Replace("Controller", "");
            FinalFileName = FinalFileName.Replace(".cs", "");
            return $"{FinalFileName}.service.ts";
        };
    }


	// Change ApiController to Service
    string ServiceName(Class c) => c.Name.Replace("Controller", "Service");
    
	string AsyncName(Method m) => m.name + "Async";
	string ObserveName(Method m) => m.name + "Observe";

    // Turn IActionResult into void
    string ReturnType(Method objMethod) 
    {
        if(objMethod.Type.Name == "IActionResult")
        {
                if((objMethod.Parameters.Where(x => !x.Type.IsPrimitive).FirstOrDefault() != null))
                {
                    return objMethod.Parameters.Where(x => !x.Type.IsPrimitive).FirstOrDefault().Name;
                }
                else
                {
                    return "void";
                }
        } 
        else
        {
                return objMethod.Type.Name;
        }
    }
    // Format the method based on the return type
    string MethodFormat(Method objMethod)
    {
        if(objMethod.HttpMethod() == "get"){
            return  $"<{objMethod.Type.Name}>(_Url)";
        } 
        
        if(objMethod.HttpMethod() == "post"){
            return  $"(_Url, {objMethod.Parameters[0].name})";
        }
        if(objMethod.HttpMethod() == "put"){
            return  $"(_Url, {objMethod.Parameters[1].name})";
        }
        if(objMethod.HttpMethod() == "delete"){
            return  $"(_Url)";
        }
        
        return  $"";
    }

	// Get the non primitive paramaters so we can create the Imports at the
    // top of the service
    
    string ImportsListProperties(Class objClass)
    {
    //var t = Typewriter.Extensions.Types.TypeExtensions.Unwrap;
    
        var ImportsOutput = new List<string>();
        //try {
        //    ImportsOutput.Add("//All Parameters Types\n");
        //    var lst = (from objProp in objClass.Properties
        //                select "//" + "(" + objProp.Name +":" + 
        //                objProp.Type.Name + " - Unwrap [" +  
        //                objProp.Type.Unwrap().Name + "])\n").ToList();
        //       
        //    ImportsOutput.AddRange(lst);
        //}
        //catch (Exception ex) {
        //    ImportsOutput.Add("//" + ex.ToString() + "\n");
        //} 

        try {
        
            //ImportsOutput.Add("//Normal Values\n");
            var lst1 = (from objProp in objClass.Properties
                        where (!objProp.Type.Unwrap().IsPrimitive) && 
                        objProp.Type.Unwrap().Name != objClass.Name
                        select $"import {{ {objProp.Type.Unwrap().Name} }} from '../classes/{objProp.Type.Unwrap().Name}';"
                        ).ToList();

            ImportsOutput.AddRange(lst1);
        }
        catch  (Exception ex) {
            ImportsOutput.Add("//" + ex.ToString() + "\n");
        }
        try {
            //ImportsOutput.Add("//Enums\n");
            
            var lst2 = (from objProp in objClass.Properties
                        where (objProp.Type.Unwrap().IsEnum)
                        select $"import {objProp.Type.Unwrap().Name} = Enums.EnumDefinitions.{objProp.Type.Unwrap().Name};"
                        ).ToList();
                        
            ImportsOutput.AddRange(lst2);
        }
        catch  (Exception ex) {
            ImportsOutput.Add("//" + ex.ToString() + "\n");
        }
        if (objClass.BaseClass !=null) {
          
           // try {
           //     ImportsOutput.Add("//Base Class Parameters Types\n");
           //     var lst = (from objProp in objClass.BaseClass.Properties
           //                 select "//" + "(" + objProp.Name +":" + 
           //                 objProp.Type.Name + " - Unwrap [" +  
           //                 objProp.Type.Unwrap().Name + "])\n").ToList();
           //    
           //     ImportsOutput.AddRange(lst);
           // }
           // catch (Exception ex) {
           //     ImportsOutput.Add("//" + ex.ToString() + "\n");
           // } 
            try {
        
                //ImportsOutput.Add("//Base Class Values\n");
                var lst1 = (from objProp in objClass.BaseClass.Properties
                            where (!objProp.Type.Unwrap().IsPrimitive) && 
                            objProp.Type.Unwrap().Name != objClass.Name
                            select $"import {{ {objProp.Type.Unwrap().Name} }} from '../classes/{objProp.Type.Unwrap().Name}';"
                            ).ToList();

                ImportsOutput.AddRange(lst1);
            }
            catch  (Exception ex) {
                ImportsOutput.Add("//" + ex.ToString() + "\n");
            }
            try {
                //ImportsOutput.Add("//Base Class Enums\n");
            
                var lst2 = (from objProp in objClass.BaseClass.Properties
                            where (objProp.Type.Unwrap().IsEnum)
                            select $"import {objProp.Type.Unwrap().Name} = Enums.EnumDefinitions.{objProp.Type.Unwrap().Name};"
                            ).ToList();
                        
                ImportsOutput.AddRange(lst2);
            }
            catch  (Exception ex) {
                ImportsOutput.Add("//" + ex.ToString() + "\n");
            }
        }


        ImportsOutput = (from name in ImportsOutput select name).Distinct().ToList();

        return string.Join("\n", ImportsOutput.ToArray());
    }

    string ImportsListMethods(Class objClass)
    {
        var ImportsOutput = new List<string>();
        //try {
        //    ImportsOutput.Add("//All Parameters Types\n");
        //    var lst = (from objMethod in objClass.Methods
        //            from objParameter in objMethod.Parameters
        //                select "//" + objMethod.Type.Name + " - Unwrap [" +  
        //                objMethod.Type.Unwrap().Name + "] " + 
        //                objMethod.Name + "(" + objParameter.Name +":" + 
        //                objParameter.Type.Name + " - Unwrap [" +  
        //                objParameter.Type.Unwrap().Name + "])\n").ToList();
        //       
        //    ImportsOutput.AddRange(lst);
        //}
        //catch (Exception ex) {
        //    ImportsOutput.Add("//" + ex.ToString() + "\n");
        //}         
        try {
        
        //    ImportsOutput.Add("//Return Values\n");
            var lst1 = (from objMethod in objClass.Methods
                    where !objMethod.Type.Unwrap().IsPrimitive &&
                        objMethod.Type.Name != objClass.Name &&
                        objMethod.Type.Name != "void"
                        select $"import {{ {objMethod.Type.Unwrap().Name} }} from '../classes/{objMethod.Type.Unwrap().Name}';").ToList();
        
            ImportsOutput.AddRange(lst1);
        }
        catch  (Exception ex) {
            ImportsOutput.Add("//" + ex.ToString() + "\n");
        }        
        try {
        
            //ImportsOutput.Add("//Normal Values\n");
            var lst1 = (from objMethod in objClass.Methods
                    from objParameter in objMethod.Parameters
                    where !objParameter.Type.Unwrap().IsPrimitive &&
                        objParameter.Type.Name != objClass.Name
                        select $"import {{ {objParameter.Type.Unwrap().Name} }} from '../classes/{objParameter.Type.Unwrap().Name}';").ToList();
        
            ImportsOutput.AddRange(lst1);
        }
        catch  (Exception ex) {
            ImportsOutput.Add("//" + ex.ToString() + "\n");
        }
        try {
            //ImportsOutput.Add("//Enums\n");
            var lst2 = (from objMethod in objClass.Methods
                    from objParameter in objMethod.Parameters
                        where (objParameter.Type.Unwrap().IsEnum)
                        select $"import {objParameter.Type.Unwrap().Name} = Enums.EnumDefinitions.{objParameter.Type.Unwrap().Name};"
                        ).ToList();
                        
            ImportsOutput.AddRange(lst2);
        }
        catch  (Exception ex) {
            ImportsOutput.Add("//" + ex.ToString() + "\n");
        }
                        
        ImportsOutput = (from name in ImportsOutput select name).Distinct().ToList();
        
        return string.Join("\n", ImportsOutput.ToArray());
    }

}
${
//The do not modify block below is intended for the outputed typescript files... }
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";
$Classes(*Controller)[
    import * as Enums from '../classes/EnumDefinitions'
    $ImportsListMethods

@Injectable()
export class $ServiceName {

    constructor(private _httpClient: HttpClient) { }        
    $Methods[
    // $HttpMethod: $Url   

	//public $name = ($Parameters[$name: $Type][, ], callback: (data: $ReturnType)=>void) : void => {
	//	this.$ObserveName($Parameters[$name][, ]).subscribe(response => callback(response));
	//}

	public $AsyncName = ($Parameters[$name: $Type][, ]) : Promise<$ReturnType> => {
		return this.$name($Parameters[$name][, ]).first().toPromise();
	}  

	public $name = ($Parameters[$name: $Type][, ]) : Observable<$ReturnType> => {
        var _Url = `$Url`;
            return this._httpClient.$HttpMethod$MethodFormat
                .catch(this.handleError);
	};

    ]
    // Utility
    private handleError(error: HttpErrorResponse) {
        console.error(error);
        let customError: string = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText
        }
        return Observable.throw(customError || 'Server error');
    }
}]


	