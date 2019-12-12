${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;

}


    export module EnumDefinitions {
$Enums(CombatTracker.Entities.Reference*)[
            export enum $Name {
                $Values[$Name = $Value][,
                ]
            }
    ]
    }