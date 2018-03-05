${
    using Typewriter.Extensions.WebApi;

    string ReturnType(Method m) => m.Type.Name == "IHttpActionResult" ? "void" : m.Type.Name;
    string ServiceName(Class c) => c.Name.Replace("Controller", "Service");
}
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as reference from "../current/Game";

//module App { $Classes(:Controller)[

    export class $Name {

        constructor(private $http: ng.IHttpService) { 
        } $Methods[
        
        public $name = ($Parameters[$name: $Type][, ]) : ng.IHttpPromise<$ReturnType> => {
            
            return this.$http<$ReturnType>({
                url: `$Url`, 
                method: "$HttpMethod", 
                data: $RequestData
            });
        };]
    }
    
//    angular.module("App").service("$ServiceName", ["$http", $Name]);]
//}