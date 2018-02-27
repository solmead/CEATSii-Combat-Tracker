<%@ Control Language="VB" Inherits="System.Web.Mvc.ViewUserControl(Of CombatTrackerData.Attack)" %>
<%="" %>
<table class="basetable" cellpadding="0" cellspacing="0">
    <tr>
        <td style="white-space:nowrap;">
            <%If Model.AttackType.HasDB Then%>
                <%= Html.Encode(Model.OB)%> OB&nbsp;
            <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <% If Model.AttackType.HasSize Then%>
                <%=Html.Encode(Model.SizeRating.Name)%>&nbsp;
            <% End If%>
        </td style="white-space:nowrap;">
        <td style="white-space:nowrap;">
            <%=Html.Encode(Model.AttackType.Name)%>&nbsp;
        </td>
        <td style="white-space:nowrap;">
            <%If Model.PercentChance < 100 Then%>
                <%=Html.Encode(Model.PercentChance.ToString("##0"))%>%&nbsp;
            <%End If %>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.Number > 1 Then%>
               (<%=Html.Encode(Model.Number)%>x)&nbsp;
           <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.DamageMultiplier > 1 Then%>
                (<%=Html.Encode(Model.DamageMultiplier)%> x Damage)
            <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.UseCriticalInstead_ID > 1 Then%>
                (Use Instead <%=Html.Encode(Model.CriticalLevel.ToString) & " " & Html.Encode(Model.CriticalUseInstead.Name)%>)&nbsp;
            <%End If%>
        </td>
        <td style="white-space:nowrap;">
            <%For Each AddCrit In Model.AdditionalCrits%>
                [Additionally Does <%=Html.Encode(Model.CriticalLevel.ToString) & " " & Html.Encode(AddCrit.CriticalType.Name)%>]&nbsp;
            <%Next%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.ThisRoundSuccess IsNot Nothing Then%>
                <table cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                        &lt;&lt; Same Round&nbsp;
                        </td>
                        <td>
                <%Html.RenderPartial("/Views/Attack/Details.ascx", Model.ThisRoundSuccess)%>
                        </td>
                    </tr>
                </table>
            <% End If%>
        </td>
        <td style="white-space:nowrap;">
            <%If Model.NextRoundSuccess IsNot Nothing Then%>
                <table cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                        ! Next Round &nbsp;
                        </td>
                        <td>
                <%Html.RenderPartial("/Views/Attack/Details.ascx", Model.NextRoundSuccess)%>
                        </td>
                    </tr>
                </table>
            <% End If%>
        </td>
    </tr>
</table>