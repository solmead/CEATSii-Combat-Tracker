${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;

    // Uncomment the constructor to change template settings.
    //Template(Settings settings)
    //{
    //    settings.IncludeProject("Project.Name");
    //    settings.OutputExtension = ".tsx";
    //}

    // Custom extension methods can be used in the template by adding a $ prefix e.g. $LoudName
    string LoudName(Property property)
    {
        return property.Name.ToUpperInvariant();
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
        var lst1 = (from objProp in objClass.Properties
                        where (!objProp.Type.Unwrap().IsPrimitive) && 
                        objProp.Type.Unwrap().Name != objClass.Name
                        select $"import {{ {objProp.Type.Unwrap().Name} }} from '../classes/{objProp.Type.Unwrap().Name}';"
                        ).ToList();
        var lst2 = (from objProp in objClass.Properties
                        where (objProp.Type.Unwrap().IsEnum)
                        select $"import {objProp.Type.Unwrap().Name} = Enums.EnumDefinitions.{objProp.Type.Unwrap().Name};"
                        ).ToList();
        ImportsOutput.AddRange(lst1);
        ImportsOutput.AddRange(lst2);
        ImportsOutput = (from name in ImportsOutput select name).Distinct().ToList();

        return string.Join("\n", ImportsOutput.ToArray());
    }

    string ImportsListMethods(Class objClass)
    {
        var ImportsOutput = new List<string>();
        var lst1 = (from objMethod in objClass.Methods
                    from objParameter in objMethod.Parameters
                    where !objParameter.Type.Unwrap().IsPrimitive &&
                        objParameter.Type.Name != objClass.Name
                        select $"import {{ {objParameter.Type.Unwrap().Name} }} from '../classes/{objParameter.Type.Unwrap().Name}';").ToList();
        
        var lst2 = (from objMethod in objClass.Methods
                    from objParameter in objMethod.Parameters
                        where (objParameter.Type.Unwrap().IsEnum)
                        select $"import {objParameter.Type.Unwrap().Name} = Enums.EnumDefinitions.{objParameter.Type.Unwrap().Name};"
                        ).ToList();

                        
        ImportsOutput.AddRange(lst1);
        ImportsOutput.AddRange(lst2);
        ImportsOutput = (from name in ImportsOutput select name).Distinct().ToList();
        
        return string.Join("\n", ImportsOutput.ToArray());
    }

}


$Classes(CombatTracker.Entities.*)[
    import * as Enums from '../classes/EnumDefinitions'
    $ImportsListProperties
    export interface $Name {$Properties[
        $name$TypeFormatted: $Type;]
    }
]