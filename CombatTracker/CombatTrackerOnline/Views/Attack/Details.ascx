<%@ Control Language="VB" Inherits="System.Web.Mvc.ViewUserControl(Of CombatTrackerData.Attack)" %>
<%="" %>
<table class="basetable" cellpadding="0" cellspacing="0">
    <tr>
        <td style="white-space:nowrap;">
            <%If Model.AttackType.HasDB Then%>
                <%= Html.Encode(Model.OB)%>
            <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <% If Model.AttackType.HasSize Then%>
                <%=Html.Encode(Model.SizeRating.Abbreviation)%>
            <% End If%>
        </td>
        <td style="white-space:nowrap;">
            <%=Html.Encode(Model.AttackType.Abbreviation)%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.PercentChance < 100 Then%>
                <%=Html.Encode(Model.PercentChance.ToString("##0"))%>
            <%End If %>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.Number > 1 Then%>
               (<%=Html.Encode(Model.Number)%>x)
           <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.DamageMultiplier > 1 Then%>
                (<%=Html.Encode(Model.DamageMultiplier)%>D)
            <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.UseCriticalInstead_ID > 1 Then%>
                (<%=Html.Encode(Model.CriticalLevel.ToString) & " " & Html.Encode(Model.CriticalUseInstead.Name)%>)
            <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <%For Each AddCrit In Model.AdditionalCrits%>
                [<%=Html.Encode(Model.CriticalLevel.ToString) & " " & Html.Encode(AddCrit.CriticalType.Name)%>]
            <%Next%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.ThisRoundSuccess IsNot Nothing Then%>
                <div style="float:left;">
                &lt;&lt;
                </div>
                <div style="float:left;">
                <%Html.RenderPartial("/Views/Attack/Details.ascx", Model.ThisRoundSuccess)%>
                </div>
            <% End If%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.NextRoundSuccess IsNot Nothing Then%>
                <div style="float:left;">
                !
                </div>
                <div style="float:left;">
                <%Html.RenderPartial("/Views/Attack/Details.ascx", Model.NextRoundSuccess)%>
                </div>
            <% End If%>
        </td>
    </tr>
</table>
    


