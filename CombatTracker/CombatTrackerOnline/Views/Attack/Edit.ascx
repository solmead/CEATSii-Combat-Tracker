<%@ Control Language="VB" Inherits="System.Web.Mvc.ViewUserControl(Of CombatTrackerData.Attack)" %>

    <%=Html.ValidationSummary("Edit was unsuccessful. Please correct the errors and try again.")%>

    <% Using Html.BeginForm() %>
<%="" %>
<table class="basetable" cellpadding="0" cellspacing="0">
    <tr>
        <td style="white-space:nowrap;">
            <%=Html.TextBox("OB", Model.OB, New With {.class = "Title", .Style = "Width:30px"})%>
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
            <%=Html.TextBox("PercentChance", String.Format("{0:F}", Model.PercentChance), New With {.class = "Title", .Style = "Width:30px"})%>
        </td>
        <td style="white-space:nowrap;">
            (<%=Html.TextBox("Number", Model.Number, New With {.class = "Title", .Style = "Width:10px"})%>x)
        </td>
        <td style="white-space:nowrap;">
            (<%=Html.TextBox("DamageMultiplier", Model.DamageMultiplier, New With {.class = "Title", .Style = "Width:10px"})%>D)
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
    </tr>
</table>
<%  Html.RenderPartial("/Views/Attack/Details.ascx", Model)%>


        <fieldset>
            <legend>Fields</legend>
            <p>
                <label for="MaxOB">MaxOB:</label>
                <%= Html.TextBox("MaxOB", Model.MaxOB) %>
                <%= Html.ValidationMessage("MaxOB", "*") %>
            </p>
            <p>
                <label for="AdditionalCritsIsOr">AdditionalCritsIsOr:</label>
                <%= Html.TextBox("AdditionalCritsIsOr", Model.AdditionalCritsIsOr) %>
                <%= Html.ValidationMessage("AdditionalCritsIsOr", "*") %>
            </p>
            <p>
                <input type="submit" value="Save" />
            </p>
        </fieldset>

    <% End Using %>

    <div>
        <%=Html.ActionLink("Back to List", "Index") %>
    </div>


