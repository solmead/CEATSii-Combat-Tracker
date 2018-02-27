<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Combat Tracker - Edit Account:<%=Html.Encode(Model.FullName)%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
    <%
    Dim User As SystemUser = Model
 %>
	<div class="span-26 last">
    <h2>Edit Account</h2>
    </div>

	<div class="span-8">
    <%If User.IsApproved Then%>
        <% Using Html.BeginForm("Deactivate", "Account", New With {.ID = User.UserId})%>
            <p>This account is <strong class="bright">active</strong>, <input type="submit" value="Deactivate" class="button" /> it?</p>
        <% End Using %>
    <%Else%>
        <% Using Html.BeginForm("Activate", "Account", New With {.ID = User.UserId})%>
            <p>This account is <strong class="bright">inactive</strong>, <input type="submit" value="Activate" class="button" /> it?</p>
        <% End Using %>
    <%End If%>
	</div>
	<div class="span-18 last">
    <%If User.IsLockedOut Then%>
        <% Using Html.BeginForm("Unlock", "Account", New With {.ID = User.UserId})%>
            <p>This account has been <strong class="bright">locked</strong>, <input type="submit" value="Unlock" class="button" /> it?</p>
        <% End Using %>
	<%End If%>
	</div>
	
	<div class="span-26 last">
	<%=Html.ValidationSummary()%>
	
    <% Using Html.BeginForm() %>
	<div class="span-26 last">
    <div class="span-13">
	<p>
		<label for="UserName">Username</label><br />
		<%= Html.TextBox("UserName", User.UserName, New With { .class = "title" }) %>
		<%= Html.ValidationMessage("UserName", "*") %>
	</p>
	<p>
		<label for="FirstName">First Name</label><br />
		<%=Html.TextBox("FirstName", User.FirstName, New With { .class = "text" })%>
		<%=Html.ValidationMessage("FirstName", "*")%>
	</p>
	<p>
		<label for="LastName">Last Name</label><br />
		<%=Html.TextBox("LastName", User.LastName, New With { .class = "text" })%>
		<%=Html.ValidationMessage("LastName", "*")%>
	</p>
	<p>
		<label for="EmailAddress">Email</label><br />
		<%= Html.TextBox("EmailAddress", User.EmailAddress, New With { .class = "text" }) %>
		<%= Html.ValidationMessage("EmailAddress", "*") %>
	</p>
	<p>
		<label for="Password">New Password</label><br />
		<%=Html.Password("Password", User.Password, New With { .class = "text" })%>
		<%= Html.ValidationMessage("Password", "*") %>
	</p>
	<p>
		<label for="confirmPassword">Confirm Password</label><br />
		<%=Html.Password("confirmPassword", "", New With { .class = "text" })%>
		<%= Html.ValidationMessage("confirmPassword", "*") %>
	</p>
	<p>
		<label for="selectedrole">Access Level</label><br />
		<%Dim RoleList As List(Of Mvc.SelectListItem) = ViewData("rolelist")%>
		<%=Html.DropDownList("Role", RoleList)%>
		<%=Html.ValidationMessage("Role", "*")%>
	</p>
	
	</div>
    
	</div>
	<p>
		<input type="submit" value="Update Account" class="button" />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... Or <%=Html.ActionLink("go back to the account list", "Index")%> without saving.
	</p>
    <% End Using %>
	</div>
	<div style="clear:both;"></div>
</asp:Content>

