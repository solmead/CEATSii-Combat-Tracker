<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of IEnumerable (Of CombatTrackerData.Game))" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Combat Tracker - Game Instance
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
<%="" %>
<%  Dim GMGames As List(Of Game) = ViewData("GMGames")%>
<%  Dim PlayedGames As List(Of Game) = ViewData("PlayedGames")%>

    <h2>Games that you are GMing.</h2>
    <table class="datatable">
        <tr>
            <th>
                Name
            </th>
            <th>
                CurrentTime
            </th>
            <th></th>
        </tr>

<%  Dim first As Boolean = True
        Dim IsOdd As Boolean = False
       %>
    <% For Each item In GMGames%>
		<%IsOdd = Not IsOdd%>
        <tr class="<%=iif(IsOdd,"odd-row","even-row") %>">
            <td style="white-space:nowrap;">
                <%=Html.ActionLink(Html.Encode(item.Name), "Details", New With {.id = item.ID})%> 
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:F}", item.CurrentTime)) %>
            </td>
            <td>
                <%=Html.DeleteActionLink("Delete", "Delete", "Game", New With {.id = item.ID}, New With {.class = "destructive button"})%>
            </td>
        </tr>
    
    <% Next%>

    </table>

    <div style="margin-left:10px; width:98%;">
        <%=Html.ActionLink("Create New Game", "Create")%>
    </div>
    
    <h2>Games that you are playing in.</h2>
    <table class="datatable">
        <tr>
            <th>
                Name
            </th>
            <th>
                CurrentTime
            </th>
            <th>GM</th>
        </tr>

<%  first = True
    IsOdd = False
       %>
    <% For Each item In PlayedGames%>
		<%IsOdd = Not IsOdd%>
        <tr class="<%=iif(IsOdd,"odd-row","even-row") %>">
            <td style="white-space:nowrap;">
                <%=Html.ActionLink(Html.Encode(item.Name), "Details", New With {.id = item.ID})%> 
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:F}", item.CurrentTime)) %>
            </td>
            <td>
                <%=Html.Encode(item.GM.FullName)%>
            </td>
        </tr>
    
    <% Next%>

    </table>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadArea" runat="server">
</asp:Content>


