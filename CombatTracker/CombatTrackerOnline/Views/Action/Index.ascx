<%@ Control Language="VB" Inherits="System.Web.Mvc.ViewUserControl(Of IEnumerable (Of CombatTrackerData.Action))" %>
<%="" %>
<div style="width:100%; border:solid 1px green; overflow:auto;">
    <%Dim CurrentUser As SystemUser = ViewData("CurrentUser")%>
    <% For Each item In Model%>
        <%If item.ActionType <> ActionTypeEnum.Current OrElse (CurrentUser.Role = UserRolesEnum.Administrator OrElse (CurrentUser.Actors.Contains(item.WhoIsActing))) Then%>
            <%Html.RenderPartial("/Views/Action/Details.ascx", item)%>
        <%End If%>
    <%Next%> 
        
</div>
    


