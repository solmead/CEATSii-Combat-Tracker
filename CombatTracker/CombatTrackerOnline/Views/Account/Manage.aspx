<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Combat Tracker - Manage Account:<%=Html.Encode(Model.FullName)%>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
    <%
        Dim User As SystemUser = Model
        %>

    <h2>Manage Your Account (<%=Html.Encode(Model.UserName)%>)</h2>

	<div class="span-22 last">
    <%=Html.ValidationSummary()%>

    <% Using Html.BeginForm() %>
	<div class="span-22 last">
    <div class="span-11">
	        <p>
		        <label for="FirstName">First Name</label><br />
		        <%=Html.TextBox("FirstName", User.FirstName, New With {.class = "text"})%>
		        <%=Html.ValidationMessage("FirstName", "Enter the users first name.")%>
	        </p>
	        <p>
		        <label for="LastName">Last Name</label><br />
		        <%=Html.TextBox("LastName", User.LastName, New With {.class = "text"})%>
		        <%=Html.ValidationMessage("LastName", "Enter the users last name.")%>
	        </p>
            <p>
                <label for="EmailAddress">Email Address</label><br />
                <%=Html.TextBox("EmailAddress", User.EmailAddress, New With {.class = "text"})%>
                <%= Html.ValidationMessage("EmailAddress", "Your account needs an email address.") %>
            </p>
            <p>
                <label for="Password">New Password</label><br />
                <%=Html.Password("Password", User.Password, New With {.class = "text"})%>
                <%= Html.ValidationMessage("Password", "*") %>
            </p>
            <p>
                <label for="confirmPassword">Confirm New Password</label><br />
                <%=Html.Password("confirmPassword", User.confirmPassword, New With { .class = "text" })%>
                <%= Html.ValidationMessage("confirmPassword", "*") %>
            </p>
	</div>
	</div>
            <p>
                <input type="submit" value="Save My Changes" class="button" />
            </p>
    <% End Using %>
            </div>
            
	<div style="clear:both;"></div>
</asp:Content>
