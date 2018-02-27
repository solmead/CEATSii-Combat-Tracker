<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Combat Tracker - Forgot Password
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">

    <h2>Forgot Password Request</h2>
    <p>
    Enter your username below to have your password reset. A new password will be sent to the Email setup on your account.
    </p>
    <%=Html.ValidationSummary()%>

    <% Using Html.BeginForm()%>
    <p>
        <label for="UserName">User Name</label><br />
        <%=Html.TextBox("UserName", "", New With {.class = "text"})%>
        <%=Html.ValidationMessage("UserName", "Must be a valid User Name.")%>
    </p>
        <input id="EmailNewPassword" class="button" type="submit" value="Email New Password" />
    <% End Using %>
    
    <%=Html.RouteLink("Go Back to Login", "Default", New With {.Controller = "Account", .Action = "login"}, New With {.class = "button"})%>
    <script type="text/javascript" language="javascript">
        var disable = { background: "#ccc", border: "1px solid #aaa", color: "#666" };
        var enable = { background: "#ff5b1b", border: "1px solid #b53300", color: "#fff" };
        
        $("#EmailNewPassword").attr("disabled", "disabled").css(disable);

        $("#UserName").keyup(function() {
            if ($(this).val().length > 0) {
                $("#EmailNewPassword").removeAttr("disabled").css(enable);
            } else {
            $("#EmailNewPassword").attr("disabled", "disabled").css(disable);
            }
        });
    
        $("#EmailNewPassword").click(function() {
            var del = confirm("Really change the password? You can not undo this action.");
            if (del) {
                return true;
            } else {
                return false;
            }
        });
    </script>
	<div style="clear:both;"></div>
</asp:Content>
