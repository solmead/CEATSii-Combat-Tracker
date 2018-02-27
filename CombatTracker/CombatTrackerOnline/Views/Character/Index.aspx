<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of CombatTrackerOnline.PaginatedList(Of CombatTrackerData.Character))" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Characters
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadArea" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
    <%="" %>
    <h2 style="margin-left:200px;">Character List</h2>
    <table class="datatable">
        <tr>
            <th>
                Name
            </th>
            <th>
                Level
            </th>
            <th>
                Base Inititive
            </th>
            <th>
                Hit Points
            </th>
            <th>
                Exhaustion Points
            </th>
            <th>
                Power Points
            </th>
            <th>
                Type
            </th>
            <th>
                Strength Bonus
            </th>
            <th>
                Percent Required Adrenal DB
            </th>
            <th>
                Walk Speed
            </th>
            <th></th>
        </tr>

<%  Dim first As Boolean = True
        Dim IsOdd As Boolean = False
       %>
    <% For Each item In Model%>
		<%IsOdd = Not IsOdd%>
        <tr class="<%=iif(IsOdd,"odd-row","even-row") %>">
            <td style="white-space:nowrap;">
                <%=Html.ActionLink(Html.Encode(item.Name), "Edit", New With {.id = item.ID})%> 
            </td>
            <td>
                <%= Html.Encode(item.Level) %>
            </td>
            <td>
                <%= Html.Encode(item.BaseInititive) %>
            </td>
            <td>
                <%= Html.Encode(item.HitPoints) %>
            </td>
            <td>
                <%= Html.Encode(item.ExhaustionPoints) %>
            </td>
            <td>
                <%= Html.Encode(item.PowerPoints) %>
            </td>
            <td>
                <%=Html.Encode(item.Type.ToString)%>
            </td>
            <td>
                <%= Html.Encode(item.StrengthBonus) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:F}", item.PercentRequiredAdrenalDB)) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:F}", item.WalkSpeed)) %>
            </td>
            <td>
                <%=Html.DeleteActionLink("Delete", "Delete", "Character", New With {.id = item.ID}, New With {.class = "destructive button"})%>
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


