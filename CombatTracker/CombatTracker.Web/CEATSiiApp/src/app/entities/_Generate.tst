${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;

    // Custom extension methods can be used in the template by adding a $ prefix e.g. $LoudName
    string LoudName(Property property)
    {
        return property.Name.ToUpperInvariant();
    }
    string TheName(Property property)
    {
        return property.Name;
    }
    string TypeFormatted(Property property)
    {
        var type = property.Type;
        if (type.IsNullable)
        {
            return  $"?";
        }
        else
        {
            return  $"";
        }
    }



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
                        select $"import {{ {objProp.Type.Unwrap().Name} }} from './{objProp.Type.Unwrap().Name}';"
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
                            select $"import {{ {objProp.Type.Unwrap().Name} }} from './{objProp.Type.Unwrap().Name}';"
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
                        select $"import {{ {objMethod.Type.Unwrap().Name} }} from './{objMethod.Type.Unwrap().Name}';").ToList();

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
                        select $"import {{ {objParameter.Type.Unwrap().Name} }} from './{objParameter.Type.Unwrap().Name}';").ToList();

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

$Classes(CombatTracker.Entities.Current.*)[
    import * as Enums from './EnumDefinitions'
    $ImportsListProperties
    export class $Name {$BaseClass[$Properties[
        $name$TypeFormatted: $Type;]]$Properties[
        $name$TypeFormatted: $Type;]


        constructor() {
        }
    }
]

$Classes(CombatTracker.Entities.Utilities.*)[
    import * as Enums from './EnumDefinitions'
    $ImportsListProperties
    export class $Name {$BaseClass[$Properties[
        $name$TypeFormatted: $Type;]]$Properties[
        $name$TypeFormatted: $Type;]


        constructor() {
        }
    }
]
$Classes(CombatTracker.Entities.Reference.*)[
    import * as Enums from './EnumDefinitions'
    $ImportsListProperties
    export class $Name {$BaseClass[$Properties[
        $name$TypeFormatted: $Type;]]$Properties[
        $name$TypeFormatted: $Type;]

        constructor() {
        }
    }
]
$Classes(CombatTracker.Entities.ViewModels.*)[
    import * as Enums from './EnumDefinitions'
    $ImportsListProperties
    export class $Name {$BaseClass[$Properties[
        $name$TypeFormatted: $Type;]]$Properties[
        $name$TypeFormatted: $Type;]

        constructor() {
        }
    }
]
$Classes(CombatTracker.Entities.Security.*)[
    import * as Enums from './EnumDefinitions'
    $ImportsListProperties
    export class $Name {$BaseClass[$Properties[
        $name$TypeFormatted: $Type;]]$Properties[
        $name$TypeFormatted: $Type;]

        constructor() {
        }
    }
]

