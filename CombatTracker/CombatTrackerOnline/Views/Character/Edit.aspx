<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of CombatTrackerData.Character)" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Edit
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">

    <h2>Edit</h2>

    <%=Html.ValidationSummary("Edit was unsuccessful. Please correct the errors and try again.")%>

    <% Using Html.BeginForm() %>

        <fieldset>
            <legend></legend>
            <p>
                <label for="Name">Name:</label><br />
                <%=Html.TextBox("Name", Model.Name, New With {.class = "title"})%>
                <%= Html.ValidationMessage("Name", "*") %>
            </p>
            <p>
                <label for="Level">Level:</label><br />
                <%=Html.TextBox("Level", Model.Level, New With {.class = "title"})%>
                <%= Html.ValidationMessage("Level", "*") %>
            </p>
            <p>
                <label for="BaseInititive">Base Inititive:</label><br />
                <%=Html.TextBox("BaseInititive", Model.BaseInititive, New With {.class = "title"})%>
                <%= Html.ValidationMessage("BaseInititive", "*") %>
            </p>
            <p>
                <label for="HitPoints">Hit Points:</label><br />
                <%=Html.TextBox("HitPoints", Model.HitPoints, New With {.class = "title"})%>
                <%= Html.ValidationMessage("HitPoints", "*") %>
            </p>
            <p>
                <label for="ExhaustionPoints">Exhaustion Points:</label><br />
                <%=Html.TextBox("ExhaustionPoints", Model.ExhaustionPoints, New With {.class = "title"})%>
                <%= Html.ValidationMessage("ExhaustionPoints", "*") %>
            </p>
            <p>
                <label for="PowerPoints">Power Points:</label><br />
                <%=Html.TextBox("PowerPoints", Model.PowerPoints, New With {.class = "title"})%>
                <%= Html.ValidationMessage("PowerPoints", "*") %>
            </p>
            <p>
                <label for="Type">Type:</label><br />
                <%=Html.RadioButton("Type", "NPC", Model.Type = CombatTrackerData.CharacterType.NPC)%> NPC<br />
                <%=Html.RadioButton("Type", "PC", Model.Type = CombatTrackerData.CharacterType.PC)%> PC<br />
                <%=Html.ValidationMessage("Type", "*")%>
            </p>
            <p>
                <label for="StrengthBonus">Strength Bonus:</label><br />
                <%=Html.TextBox("StrengthBonus", Model.StrengthBonus, New With {.class = "title"})%>
                <%= Html.ValidationMessage("StrengthBonus", "*") %>
            </p>
            <p>
                <label for="PercentRequiredAdrenalDB">Percent Required Adrenal DB:</label><br />
                <%=Html.TextBox("PercentRequiredAdrenalDB", String.Format("{0:F}", Model.PercentRequiredAdrenalDB), New With {.class = "title"})%>
                <%= Html.ValidationMessage("PercentRequiredAdrenalDB", "*") %>
            </p>
            <p>
                <label for="WalkSpeed">Walk Speed:</label><br />
                <%=Html.TextBox("WalkSpeed", String.Format("{0:F}", Model.WalkSpeed), New With {.class = "title"})%>
                <%= Html.ValidationMessage("WalkSpeed", "*") %>
            </p>
            <p>
                <input type="submit" value="Save" />
            </p>
        </fieldset>

    <% End Using %>

    <div>
        <%=Html.ActionLink("Back to List", "Index") %>
    </div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadArea" runat="server">
</asp:Content>


