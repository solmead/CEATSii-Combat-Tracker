<%@ Control Language="VB" Inherits="System.Web.Mvc.ViewUserControl(Of CombatTrackerData.Action)" %>

<%=""%>
<div class="ActorActionBack" style="margin-left:<%=int((Model.LeftPercent*156))%>px;">
    <div class="ActorAction" style=" background-color:rgba(<%=Model.Color%>);">
        <span style="<%=IIf(Model.ActionType = ActionTypeEnum.Current, "font-weight:bold;", "")%>">
        <%=Model.WhoIsActing.Name%>
        </span><br />
        <%=Model.Name%><br />
        <%=Model.Note%>
    </div>
</div>