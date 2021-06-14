using System;
using System.Linq;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace CombatTracker.Web.Models.Conventions
{
    public class ApiExplorerGroupPerVersionConvention : IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            //var controllerNamespace = controller.ControllerType.Namespace; // e.g. "Controllers.v1"
            //var apiVersion = controllerNamespace?.Split('.').Last().ToLower();


            //if (!desc.TryGetMethodInfo(out MethodInfo methodInfo))
            //    return;

            var versions = controller.Attributes
                .OfType<ApiVersionAttribute>()
                .SelectMany(attr => attr.Versions);

            //var maps = methodInfo
            //.GetCustomAttributes(true)
            //.OfType<MapToApiVersionAttribute>()
            //.SelectMany(attr => attr.Versions)
            //.ToArray();

            //var versions = desc.ControllerAttributes()
            //    .OfType<ApiVersionAttribute>()
            //    .SelectMany(attr => attr.Versions);

            //var maps = desc.ActionAttributes()
            //    .OfType<MapToApiVersionAttribute>()
            //    .SelectMany(attr => attr.Versions)
            //    .ToArray();
            var apiVersion = "v1.0";
            if (versions.Any()) {
                apiVersion = versions.First().ToString();
            }


            //var ver = versions.Any(v => $"v{v.ToString()}" == version)
            //              && (!maps.Any() || maps.Any(v => $"v{v.ToString()}" == version));


            controller.ApiExplorer.GroupName = apiVersion;
        }
    }
    public class ApiExplorerGroupPerVersionMethodConvention : IActionModelConvention
    {
        
        public void Apply(ActionModel action)
        {

            var versions = action.Controller.Attributes
                .OfType<ApiVersionAttribute>()
                .SelectMany(attr => attr.Versions);

            var maps = action.Attributes
                .OfType<MapToApiVersionAttribute>()
                .SelectMany(attr => attr.Versions);



            var apiVersion = "v1.0";
            if (versions.Any())
            {
                apiVersion = versions.First().ToString();
            }
            if (maps.Any())
            {
                apiVersion = maps.First().ToString();
            }

            action.ApiExplorer.GroupName = apiVersion;


            //throw new NotImplementedException();
        }
    }
}
