using System;
using System.Linq;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace CombatTracker.Web.Models.Conventions
{
    public class ReplaceVersionWithExactValueInPath : IDocumentFilter
    {
        public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
        {
            //swaggerDoc.Paths = swaggerDoc.Paths
            //    .ToDictionary(
            //        path => path.Key.Replace("v{version}", swaggerDoc.Info.Version),
            //        path => path.Value
            //    );

            var toReplaceWith = new OpenApiPaths();

            foreach (var (key, value) in swaggerDoc.Paths)
            {
                toReplaceWith.Add(key.Replace("v{version}", swaggerDoc.Info.Version, StringComparison.InvariantCulture), value);
            }

            swaggerDoc.Paths = toReplaceWith;
        }

    }
}
