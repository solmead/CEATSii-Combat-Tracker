using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Utilities.Caching;

namespace CombatTracker.Web.Models
{
    public static class Extensions
    {

        public static async Task<IEnumerable<T>> WhereAsync<T>(this IEnumerable<T> source, Func<T, Task<bool>> predicate)
        {
            var results = await Task.WhenAll(source.Select(async x => (x, await predicate(x))));
            return results.Where(x => x.Item2).Select(x => x.Item1);
        }
        public static string ReturnUrl
        {
            get { return Cache.GetItem<string>(CacheArea.Session, "ReturnUrl", (string)null); }
            set { Cache.SetItem<string>(CacheArea.Session, "ReturnUrl", value); }
        }
        //public static string SiteFullURL
        //{
        //    get
        //    {
        //        var url = SiteBaseURL;
        //        url = url + VirtualPathUtility.ToAbsolute("~/");
        //        url = url.Substring(0, url.Length - 1);
        //        return url;
        //    }
        //}

        //public static string SiteBaseURL
        //{
        //    get
        //    {
        //        var Request = HttpContext.Current.Request;
        //        var url = Request.Url.Scheme + "://" + Request.Url.Host +
        //                  (Request.Url.Port != 80 && Request.Url.Port != 443 ? ":" + Request.Url.Port : "").ToString();
        //        //url = url + VirtualPathUtility.ToAbsolute("~/");
        //        //url = url.Substring(0, url.Length - 1);
        //        return url;
        //    }
        //}
        public static void CheckRedirect(this Controller controller, string returnUrl = "")
        {

            //var Request = HttpContext.Current.Request;
            //HttpContext.Current.Request.RequestContext
            var Url = new UrlHelper(controller.ControllerContext);
            if (string.IsNullOrWhiteSpace(returnUrl))
            {
                returnUrl = Extensions.ReturnUrl;
            }
            if (string.IsNullOrWhiteSpace(returnUrl))
            {
                returnUrl = controller.Request.GetTypedHeaders().Referer.OriginalString;
                if (returnUrl?.ToUpper()?.Contains("://") ?? false)
                {
                    returnUrl = returnUrl.Substring(returnUrl.IndexOf("://") + 3);
                    returnUrl = returnUrl.Substring(returnUrl.IndexOf("/"));
                }
            }
            if (returnUrl?.Contains("/Login") ?? false)
            {
                returnUrl = null;
            }

            if (string.IsNullOrWhiteSpace(returnUrl))
            {
                returnUrl = Url.RouteUrl("Default", new { controller = "Home", action = "Index" });
            }


            Extensions.ReturnUrl = returnUrl;
        }

        public static ISessionContext _sessionContext(this HtmlHelper helper)
        {
            var s = helper.ViewBag.SessionContext as ISessionContext;
            if (s == null)
            {
                //s = new SessionInfo();
            }
            return s;
        }


        public static string GetRouteString(this ActionExecutedContext context, string name)
        {
            var routeValues = context.RouteData.Values;
            if (routeValues.ContainsKey(name))
            {

                return routeValues[name].ToString();
            }
            var st = context.HttpContext.Request.Query[name].ToString();
            if (string.IsNullOrWhiteSpace(st))
            {
                st = context.HttpContext.Request.Form[name].ToString();
            }
            if (string.IsNullOrWhiteSpace(st))
            {
                st = context.HttpContext.Request.Cookies[name].ToString();
            }


            return st;
        }
        public static string GetRouteString(this ActionExecutingContext context, string name)
        {
            var routeValues = context.RouteData.Values;
            if (routeValues.ContainsKey(name))
            {

                return routeValues[name].ToString();
            }
            var st = context.HttpContext.Request.Query[name].ToString();
            if (string.IsNullOrWhiteSpace(st))
            {
                st = context.HttpContext.Request.Form[name].ToString();
            }
            if (string.IsNullOrWhiteSpace(st))
            {
                st = context.HttpContext.Request.Cookies[name].ToString();
            }


            return st;
        }
        //public static string GetRouteString(this AuthorizationContext context, string name)
        //{
        //    var routeValues = context.RouteData.Values;
        //    if (routeValues.ContainsKey(name))
        //    {

        //        return routeValues[name].ToString();
        //    }
        //    return context.HttpContext.Request[name];
        //}
        //public static string GetRouteString(this HttpActionContext context, string name)
        //{
        //    var routeValues = context.ControllerContext.RouteData.Values;
        //    if (routeValues.ContainsKey(name))
        //    {

        //        return routeValues[name].ToString();
        //    }
        //    return HttpContext.Current.Request[name];
        //}
        //public static string GetRouteString(this HttpContextBase context, string name)
        //{
        //    var routeValues = context.Request.RequestContext.RouteData.Values;
        //    if (routeValues.ContainsKey(name))
        //    {

        //        return routeValues[name].ToString();
        //    }
        //    return HttpContext.Current.Request[name];
        //}
        public static string GetRouteString(this HttpContext context, string name)
        {
            var routeValues = context.Request.RouteValues;
            if (routeValues.ContainsKey(name))
            {

                return routeValues[name].ToString();
            }
            var st = context.Request.Query[name].ToString();
            if (string.IsNullOrWhiteSpace(st))
            {
                st = context.Request.Form[name].ToString();
            }
            if (string.IsNullOrWhiteSpace(st))
            {
                st = context.Request.Cookies[name].ToString();
            }


            return st;
        }
        //HttpActionContext

        public static int? GetRouteInt(this HttpContext context, string name)
        {
            var pIDtext = GetRouteString(context, name);
            if (!string.IsNullOrWhiteSpace(pIDtext))
            {
                int pID = 0;
                int.TryParse(pIDtext, out pID);
                if (pID > 0)
                {
                    return pID;
                }
            }
            return null;
        }
        //public static int? GetRouteInt(this HttpContextBase context, string name)
        //{
        //    var pIDtext = GetRouteString(context, name);
        //    if (!string.IsNullOrWhiteSpace(pIDtext))
        //    {
        //        int pID = 0;
        //        int.TryParse(pIDtext, out pID);
        //        if (pID > 0)
        //        {
        //            return pID;
        //        }
        //    }
        //    return null;
        //}
        //public static int? GetRouteInt(this HttpActionContext context, string name)
        //{
        //    var pIDtext = GetRouteString(context, name);
        //    if (!string.IsNullOrWhiteSpace(pIDtext))
        //    {
        //        int pID = 0;
        //        int.TryParse(pIDtext, out pID);
        //        if (pID > 0)
        //        {
        //            return pID;
        //        }
        //    }
        //    return null;
        //}

        public static int? GetRouteInt(this ActionExecutedContext context, string name)
        {
            var pIDtext = GetRouteString(context, name);
            if (!string.IsNullOrWhiteSpace(pIDtext))
            {
                int pID = 0;
                int.TryParse(pIDtext, out pID);
                if (pID > 0)
                {
                    return pID;
                }
            }
            return null;
        }
        public static int? GetRouteInt(this ActionExecutingContext context, string name)
        {
            var pIDtext = GetRouteString(context, name);
            if (!string.IsNullOrWhiteSpace(pIDtext))
            {
                int pID = 0;
                int.TryParse(pIDtext, out pID);
                if (pID > 0)
                {
                    return pID;
                }
            }
            return null;
        }
        //public static int? GetRouteInt(this AuthorizationContext context, string name)
        //{
        //    var pIDtext = GetRouteString(context, name);
        //    if (!string.IsNullOrWhiteSpace(pIDtext))
        //    {
        //        int pID = 0;
        //        int.TryParse(pIDtext, out pID);
        //        if (pID > 0)
        //        {
        //            return pID;
        //        }
        //    }
        //    return null;
        //}
    }
}
