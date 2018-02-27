<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of CombatTrackerData.Armor)" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">

    <h2>Create</h2>

    <%= Html.ValidationSummary("Create was unsuccessful. Please correct the errors and try again.") %>

    <% Using Html.BeginForm()%>

        <fieldset>
            <legend>Fields</legend>
            <p>
                <label for="ID">ID:</label>
                <%= Html.TextBox("ID") %>
                <%= Html.ValidationMessage("ID", "*") %>
            </p>
            <p>
                <label for="Type">Type:</label>
                <%= Html.TextBox("Type") %>
                <%= Html.ValidationMessage("Type", "*") %>
            </p>
            <p>
                <label for="Description">Description:</label>
                <%= Html.TextBox("Description") %>
                <%= Html.ValidationMessage("Description", "*") %>
            </p>
            <p>
                <label for="MovingManeuverMod">MovingManeuverMod:</label>
                <%= Html.TextBox("MovingManeuverMod") %>
                <%= Html.ValidationMessage("MovingManeuverMod", "*") %>
            </p>
            <p>
                <label for="DB">DB:</label>
                <%= Html.TextBox("DB") %>
                <%= Html.ValidationMessage("DB", "*") %>
            </p>
            <p>
                <label for="BaseArmor_ID">BaseArmor_ID:</label>
                <%= Html.TextBox("BaseArmor_ID") %>
                <%= Html.ValidationMessage("BaseArmor_ID", "*") %>
            </p>
            <p>
                <label for="TiedToID">TiedToID:</label>
                <%= Html.TextBox("TiedToID") %>
                <%= Html.ValidationMessage("TiedToID", "*") %>
            </p>
            <p>
                <input type="submit" value="Create" />
            </p>
        </fieldset>

    <% End Using %>

    <div>
        <%=Html.ActionLink("Back to List", "Index") %>
    </div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadArea" runat="server">
</asp:Content>


