${
	using Typewriter.Extensions.WebApi;
    using Typewriter.Extensions.Types;
    Template(Settings settings)
    {
        settings.IncludeCurrentProject();
        settings.OutputFilenameFactory = file =>
        {
            var FinalFileName = file.Name.Replace("Controller", "");
            FinalFileName = FinalFileName.Replace(".cs", "");
            return $"{FinalFileName}.repository.ts";
        };
    }



	// Change ApiController to Service
    string ServiceName(Class c) => c.Name.Replace("Controller", "Repository");

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
        else if(objMethod.Type.Name.Contains("ActionResult"))
        {
            var tn = objMethod.Type.Unwrap().Name;
            if (tn=="ActionResult") {
              tn="void";
            }

            return tn;


        }
        else
        {
                return objMethod.Type.Name;
        }


    }

        string ProcessReturnedArray(Method objMethod) {
                var a = 1;
                try {
                Typewriter.CodeModel.Type t = objMethod.Type;
                a = 2;
                
                if(objMethod.Type.Name == "IActionResult")
                {
                        a = 3;
                        if((objMethod.Parameters.Where(x => !x.Type.IsPrimitive).FirstOrDefault() != null))
                        {
                                a = 4;
                                t= objMethod.Parameters.Where(x => !x.Type.IsPrimitive).FirstOrDefault().Type;
                        }
                        else
                        {
                                a = 5;
                                t = null;
                        }
                }
                else if(objMethod.Type.Name.Contains("ActionResult"))
                {
                        a = 6;
                        t = objMethod.Type.Unwrap();
                        var tn = t.Name;
                        if (tn=="ActionResult") {
                                t = null;
                        }
                }
                a = 7;
                if (t!=null) {
                        var nm = t.Name;

                        if (nm=="void") {
                                t = null;
                        }
                }
        
                a = 8;
              var s = "";
                if (t!=null) {
                        if (t.IsEnumerable) {
                                s = "if (data != null) data = data.map((dt) => Object.assign(new " + t.Unwrap().Name + "(), dt));";
                        } else if (!t.IsPrimitive) {
                                s = "if (data != null) data = Object.assign(new " + t.Name + "(), data);";
                        }
                }
                return s;
                }
                catch(Exception ex) {
                        return "/*a=" + a + "   " + ex.ToString() + "*/";
                }

        }

    string ReturnTypeGeneric(Method objMethod)
    {
        return objMethod.Type.Unwrap().Name;
    }
    // Format the method based on the return type
    string MethodFormat(Method objMethod)
    {
        try {
            var nm = ReturnType(objMethod);

            if(objMethod.HttpMethod() == "get"){
                return  $"<{nm}>(_Url)";
            }
            var para = objMethod.Parameters.FirstOrDefault()?.name;
            if (para == null) {
              para="null";
            }


            if(objMethod.HttpMethod() == "post"){

                return  $"<{nm}>(_Url, {para})";
            }
            if(objMethod.HttpMethod() == "put"){
                return  $"<{nm}>(_Url, {para})";
            }
            if(objMethod.HttpMethod() == "delete"){
                return  $"<{nm}>(_Url)";
            }
        } catch (Exception ex) {
            return $"(_Url, null \n // " + ex.ToString().Replace("\n"," ").Replace("\r"," ") + "\n)";
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
                        select $"import {{ {objProp.Type.Unwrap().Name} }} from '@/entities';"
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
                            select $"import {{ {objProp.Type.Unwrap().Name} }} from '@/entities';"
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
                        objMethod.Type.Name != "ActionResult" &&
                        objMethod.Type.Name != "IActionResult" &&
                        objMethod.Type.Name != "void"
                        select $"import {{ {objMethod.Type.Unwrap().Name.Replace("[]","")} }} from '@/entities';").ToList();

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
                        objMethod.Type.Name != "ActionResult" &&
                        objMethod.Type.Name != "IActionResult" &&
                        objParameter.Type.Name != objClass.Name
                        select $"import {{ {objParameter.Type.Unwrap().Name.Replace("[]","")} }} from '@/entities';").ToList();

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


    string handleReturn(string ret) {
        if (!ret.Contains("<")) {
            return "<any>" + ret;
        }
        return ret;
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
import {Observable, throwError} from "rxjs";
import { map, catchError } from "rxjs/operators";
$Classes(*Api.*Controller)[
    import * as Enums from '@/entities/EnumDefinitions'
    $ImportsListMethods

var version = "1";

@Injectable({ providedIn: 'root' })
export class $ServiceName {

    constructor(private _httpClient: HttpClient) { }
    $Methods[
    // $HttpMethod: $Url

	//public $name = ($Parameters[$name: $Type][, ], callback: (data: $ReturnType)=>void) : void => {
	//	this.$ObserveName($Parameters[$name][, ]).subscribe(response => callback(response));
	//}

	public $AsyncName = ($Parameters[$name: $Type][, ]) : Promise<$ReturnType> => {

        return new Promise<$ReturnType>((resolve, reject) => {
            this.$name($Parameters[$name][, ])
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public $name = ($Parameters[$name: $Type][, ]) : Observable<$ReturnType> => {
        $Parameters[$name = ($name == null ? <$Type><any>"" : $name);
        ]
            var _Url = `$Url`;

            return this._httpClient.$HttpMethod$MethodFormat
                .pipe(
                        map((data) => {
                            $ProcessReturnedArray
                            return data;
                        }), 
                        catchError(this.handleError)
                );
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




