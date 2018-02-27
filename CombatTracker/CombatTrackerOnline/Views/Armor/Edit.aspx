<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of CombatTrackerData.Armor)" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Edit
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">

    <h2>Edit</h2>

    <%=Html.ValidationSummary("Edit was unsuccessful. Please correct the errors and try again.")%>

    <% Using Html.BeginForm() %>

        <fieldset>
            <legend>Fields</legend>
            <p>
                <label for="ID">ID:</label>
                <%= Html.TextBox("ID", Model.ID) %>
                <%= Html.ValidationMessage("ID", "*") %>
            </p>
            <p>
                <label for="Type">Type:</label>
                <%= Html.TextBox("Type", Model.Type) %>
                <%= Html.ValidationMessage("Type", "*") %>
            </p>
            <p>
                <label for="Description">Description:</label>
                <%= Html.TextBox("Description", Model.Description) %>
                <%= Html.ValidationMessage("Description", "*") %>
            </p>
            <p>
                <label for="MovingManeuverMod">MovingManeuverMod:</label>
                <%= Html.TextBox("MovingManeuverMod", Model.MovingManeuverMod) %>
                <%= Html.ValidationMessage("MovingManeuverMod", "*") %>
            </p>
            <p>
                <label for="DB">DB:</label>
                <%= Html.TextBox("DB", Model.DB) %>
                <%= Html.ValidationMessage("DB", "*") %>
            </p>
            <p>
                <label for="BaseArmor_ID">BaseArmor_ID:</label>
                <%= Html.TextBox("BaseArmor_ID", Model.BaseArmor_ID) %>
                <%= Html.ValidationMessage("BaseArmor_ID", "*") %>
            </p>
            <p>
                <label for="TiedToID">TiedToID:</label>
                <%= Html.TextBox("TiedToID", Model.TiedToID) %>
                <%= Html.ValidationMessage("TiedToID", "*") %>
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


