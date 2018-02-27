<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of IEnumerable(Of SystemUser))" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Combat Tracker - Account Index
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
    <div class="span-3">
    <h2>Accounts</h2>	
    </div>
    <div id="addnewitem" class="span-19 last" style="margin-top:10px;">(<%=Html.ActionLink("Create New", "Create")%>)</div>
    <div class="clearfix"></div>

	<!--<p>
		<img src="/Content/Images/accept.png" alt="" class="nofloat" /> / <img src="/Content/Images/cancel.png" alt="" class="nofloat" /> = Activated / Deactivated<br />
		<img src="/Content/Images/lock.png" alt="" class="nofloat" /> / <img src="/Content/Images/lock_open.png" alt="" class="nofloat" /> = User Locked Out<br />
		<img src="/Content/Images/status_online.png" alt="" class="nofloat" /> / <img src="/Content/Images/status_offline.png" alt="" class="nofloat" /> = User Online<br />
	</p>-->
    
	<table>
        <tr>
            <th>User</th>
            <th>Email Address</th>
            <th>Access Level</th>
			<th>Last Login</th>
			<th>Locked Out?</th>
			<th></th>
        </tr>

	<% Dim IsOdd As Boolean = False %>
    <% For Each item In Model%>
		<%IsOdd = Not IsOdd%>
        <%If IsOdd Then%>
		<tr class="odd-row <%=iif(item.IsApproved, "", "line-through quiet")%>">
        <% Else %>
		<tr class="even-row <%=iif(item.IsApproved, "", "line-through quiet")%>">
        <% End If %>
            <td><%=iif(item.IsOnline, "<img src=""/Content/Images/status_online.png"" alt=""Online"" title=""This user is online."" class=""nofloat"" />", "<img src=""/Content/Images/status_offline.png"" alt=""Offline"" title=""This user is offline."" class=""nofloat"" />")%> <%=Html.ActionLink(item.UserName, "Edit", New With {.id = item.UserId})%> (<%=Html.Encode(item.FirstName)%> <%=Html.Encode(item.LastName)%>)</td>
            <td><%=Html.Encode(item.EmailAddress)%></td>
            <td><%=Html.Encode(item.Role)%></td>
            <td><%=Html.Encode(item.LastLoginDate)%></td>
			<td><%=iif(item.IsLockedOut, "Yes", "No")%></td>
            <%--<td>
                |<%=Html.ActionLink("Edit", "Edit", New With {.id = item.UserId})%> |
                <%=Html.ActionLink("Details", "Details", New With {.id = item.PrimaryKey})%>
            </td>--%>
            <td>
                <%=Html.DeleteActionLink("Delete", "Delete", "Account", New With {.id = item.UserId}, New With {.class = "destructive button"})%>
            </td>
        </tr>
    <% Next%>
    </table>
<% Html.RenderPartial("PagingControl")%>

	<div style="clear:both;"></div>
</asp:Content>

