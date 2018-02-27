<%@ Page Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="loginHead" ContentPlaceHolderID="TitleContent" runat="server">
    Combat tracker - Log In
</asp:Content>

<asp:Content ID="loginContent" ContentPlaceHolderID="MainArea" runat="server">
    <!--
	-->

	<% Using Html.BeginForm() %>
	<div class="span-22 last">
		<h2 class="span-10 prepend-6 append-6 last vertical-gap"><img src="/Content/Images/lf-logo.png" alt="LaunchForce" /></h2>
		
		<div id="login-form" class="span-10 prepend-6 append-6 last">	
			<p style="position: relative;">
				<label for="username">Username</label><br />
				<%= Html.TextBox("username", "", new with { .class = "title" }) %>
				<%= Html.ValidationMessage("username") %>
			</p>
		
			<p style="position: relative;">
				<label for="username">Password</label><br />
				<%= Html.Password("password", "", new with { .class = "title" }) %>
				<%= Html.ValidationMessage("password") %>
			</p>
		
			<div class="span-10">
			    <div class="span-3">
				<input type="submit" name="submit" value="Log In" class="button" />
				</div>
				<div class="span-6">
				<%= Html.CheckBox("rememberMe") %> Remember me on this site?<br />
				<%=Html.RouteLink("Forgot Password", "Default", New With {.Controller = "Account", .Action = "ForgotPassword"}, New With {.style = "margin-left:25px;"})%><br />
				<%=Html.RouteLink("Register", "Default", New With {.Controller = "Account", .Action = "Register"}, New With {.style = "margin-left:25px;"})%>
				</div>
			</div>
		</div>
	</div>
	<% End Using %>	 
	<div style="clear:both;"></div>   
</asp:Content>
