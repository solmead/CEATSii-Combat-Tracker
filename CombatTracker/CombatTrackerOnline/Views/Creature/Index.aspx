<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of IEnumerable (Of CombatTrackerData.Creature))" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Index
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
<%=""%>
    
<h2 style="margin-left:200px;">Creature List</h2>
    <table class="datatable">
        <tr>
            <th>
                Name
            </th>
            <th>
                Description
            </th>
            <th>
                Base Level
            </th>
            <th>
                Min Encountered
            </th>
            <th>
                Max Encountered
            </th>
            <th>
                Book
            </th>
            <th>
                Page Number
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
                <%=Html.ActionLink(Html.Encode(item.TypeName), "Edit", New With {.id = item.ID})%> 
            </td>
            <td>
                <%= Html.Encode(item.Description) %>
            </td>
            <td>
                <%= Html.Encode(item.BaseLevel) %>
            </td>
            <td>
                <%= Html.Encode(item.MinEncountered) %>
            </td>
            <td>
                <%= Html.Encode(item.MaxEncountered) %>
            </td>
            <td>
                <%= Html.Encode(item.Book) %>
            </td>
            <td>
                <%= Html.Encode(item.PageNumber) %>
            </td>
            <td>
                <%=Html.DeleteActionLink("Delete", "Delete", "Creature", New With {.id = item.ID}, New With {.class = "destructive button"})%>
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


