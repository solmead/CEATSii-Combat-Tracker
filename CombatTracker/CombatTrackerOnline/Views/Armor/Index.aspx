<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of IEnumerable (Of CombatTrackerData.Armor))" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Index
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
<%="" %>
<h2 style="margin-left:200px; ">Armor List</h2>
    <table class="datatable">
        <tr>
            <th>
                Type
            </th>
            <th>
                Description
            </th>
            <th>
                Moving Maneuver Mod
            </th>
            <th>
                DB
            </th>
            <th>
            </th>
        </tr>

<%  Dim first As Boolean = True
        Dim IsOdd As Boolean = False
       %>
    <% For Each item In Model%>
		<%IsOdd = Not IsOdd%>
        <tr class="<%=iif(IsOdd,"odd-row","even-row") %>">
            <td style="white-space:nowrap;">
                <%=Html.ActionLink(Html.Encode(item.Type), "Edit", New With {.id = item.ID})%> 
            </td>
            <td>
                <%= Html.Encode(item.Description) %>
            </td>
            <td>
                <%= Html.Encode(item.MovingManeuverMod) %>
            </td>
            <td>
                <%= Html.Encode(item.DB) %>
            </td>
            <td>
                <%=Html.DeleteActionLink("Delete", "Delete", "Armor", New With {.id = item.ID}, New With {.class = "destructive button"})%>
            </td>
        </tr>
    
    <% Next%>

    </table>

    <div style="margin-left:10px; width:98%; height:50px;">
	    <% Html.RenderPartial("PagingControl") %>
	</div>
    <div style="margin-left:10px; width:98%;">
        <%=Html.ActionLink("Create New", "Create")%>
    </div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadArea" runat="server">
</asp:Content>


