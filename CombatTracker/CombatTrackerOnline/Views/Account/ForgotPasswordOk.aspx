<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Combat Tracker - Forgot Password Final
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
    <h2>Forgot Password Request</h2>
    <p>
    The new password has been sent to the email address for the account.
    </p>
    
    <%=Html.RouteLink("Go Back to Login", "Default", New With {.Controller = "Account", .Action = "login"}, New With {.class = "button"})%>
    
	<div style="clear:both;"></div>
</asp:Content>
