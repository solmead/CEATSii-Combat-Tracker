<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage"%>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Combat Tracker - Create Account
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
<%
    Dim User As SystemUser = Model
 %>
	<h2>Add Account</h2>
	<div class="span-26 last">
    <%= Html.ValidationSummary() %>
    <% Using Html.BeginForm() %>
	<div class="span-26 last">
    <div class="span-13">
	<p>
		<label for="username">Username</label><br />
		<%= Html.TextBox("UserName", Model.UserName, New With { .class = "title" }) %>
		<%=Html.ValidationMessage("username", "Enter a username.")%>
	</p>
	<p>
		<label for="FirstName">First Name</label><br />
		<%=Html.TextBox("FirstName", Model.FirstName, New With { .class = "text" }) %>
		<%=Html.ValidationMessage("FirstName", "Enter the users first name.")%>
	</p>
	<p>
		<label for="LastName">Last Name</label><br />
		<%=Html.TextBox("LastName", Model.LastName, New With { .class = "text" }) %>
		<%=Html.ValidationMessage("LastName", "Enter the users last name.")%>
	</p>
	<p>
		<label for="email">Email</label><br />
		<%=Html.TextBox("EmailAddress", Model.EmailAddress, New With { .class = "text" }) %>
		<%=Html.ValidationMessage("EmailAddress", "Enter this person's email address.")%>
	</p>
	<p class="quiet">Choose a password that's at least <%=Html.Encode(ViewData("PasswordLength"))%> characters long.</p>
	<p>
		<label for="password">Password</label><br />
		<%= Html.Password("password", Model.Password, New With { .class = "text" }) %>
		<%=Html.ValidationMessage("password", "Make sure the password and confirmation fields match.")%>
	</p>
	<p>
		<label for="confirmPassword">Confirm Password</label><br />
		<%= Html.Password("confirmPassword", Model.confirmPassword, New With { .class = "text" }) %>
		<%=Html.ValidationMessage("password", "Make sure the password and confirmation fields match.")%>
		<%=Html.ValidationMessage("confirmPassword", "*")%>
	</p>
	<p>
		<label for="selectedrole">Access Level</label><br />
		<%Dim RoleList As List(Of Mvc.SelectListItem) = ViewData("rolelist")%>
		<%=Html.DropDownList("Role", RoleList, New With {.onchange = "RoleChange(this);"})%>
		<%=Html.ValidationMessage("Role", "Choose an access level for this user.")%>
	</p>
	
	</div>
   
	</div>
	<p>
		<input type="submit" value="Add User" class="button" />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... Or <%=Html.ActionLink("go back to the account list", "Index")%> without saving.
	</p>
    <% End Using %>
            </div>
    
	<div style="clear:both;"></div>
</asp:Content>

