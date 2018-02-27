<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of CombatTrackerData.Game)" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Details
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
    <div class="upperarea" style="">
        <div class="mainmenu" style="">
            <div id="currenttime" style="float:right;">
                Current Time:<%= Html.Encode(String.Format("{0:F}", Model.CurrentTime)) %>
            </div>
        </div>
    </div>
    <div style="width:100%; border:solid 1px Yellow;">
        <div class="span-12" style="border:solid 1px red;"></div>
        <div class="span-8" style="border:solid 1px blue; float:right; margin-right:0px;">
            <%Html.RenderPartial("/Views/Action/Index.ascx", Model.ActionsSorted)%>
        </div>
    </div>
    <div style="clear:both;">
        </div>
    <% Using Html.BeginForm()%>
        <input type="hidden" id="t" value="ee" />
    <% End Using %>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadArea" runat="server">
<script type="text/javascript">
    setTimeout("refresh()", 1000);
    function refresh() {
        //alert("timeout");
        document.forms[0].submit();
    }
</script>
</asp:Content>


