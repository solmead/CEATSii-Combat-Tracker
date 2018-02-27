<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Editing Creature - <%=Html.Encode(Model.TypeName)%>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainArea" runat="server">
    <%Dim Item As Creature = Model%>
    <%Dim LevelMods As List(Of LevelChart) = ViewData("LevelMods")%>

    <%=Html.ValidationSummary("Edit was unsuccessful. Please correct the errors and try again.")%>

    <% Using Html.BeginForm() %>

        <fieldset>
            <legend><%=Html.Encode(Model.TypeName)%></legend>
            <table class="datatable" width="100%">
                <tr class="even-row">
                    <td colspan="2" style="white-space:nowrap;">
                        <label for="TypeName">Type Name:</label>
                        <%=Html.TextBox("TypeName", Item.TypeName, New With {.class = "title", .style = "font-size:1.5em; width:200px;"})%>
                        <%= Html.ValidationMessage("TypeName", "*") %>
                    </td>
                    <td style="white-space:nowrap;" width="100%">
                        <label for="PageNumber">Book:</label>
                        <%=Html.DropDownList("Book_ID")%>
                        <label for="Book">Page:</label>
                        <%=Html.TextBox("PageNumber", Item.PageNumber, New With {.class = "title", .style = "width:30px;"})%>
                        <%=Html.ValidationMessage("Book_ID", "*")%>
                        <%= Html.ValidationMessage("PageNumber", "*") %>
                    </td>
                </tr>
                <tr class="odd-row">
                    <td style="white-space:nowrap;">
                        <label for="BaseLevel">Base Level:</label>
                        <%=Html.TextBox("BaseLevel", Item.BaseLevel, New With {.class = "title", .style = "width:20px;"})%> 
                        <%=Html.DropDownList("LevelMod_ID")%>
                        <%= Html.ValidationMessage("BaseLevel", "*") %>
                        <%=Html.ValidationMessage("LevelMod_ID", "[*]")%>
                    </td>
                    <td style="white-space:nowrap;">
                        <label for="Size">Size:</label>
                        <%=Html.DropDownList("Size_ID")%>
                        <%=Html.ValidationMessage("Size_ID", "*")%>
                        <br />
                        <div style="margin-left:40px;">
                        <span id="SizeDisplay">
                        <%=Html.Encode(Item.Size.Name)%>
                        </span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <label for="MSRating">MS/AQ:</label>
                        <%=Html.DropDownList("MSRating_ID")%>
                        <label for="AQRating">/</label>
                        <%=Html.DropDownList("AQRating_ID")%>
                        <%=Html.ValidationMessage("MSRating_ID", "*")%>
                        <%=Html.ValidationMessage("AQRating_ID", "/*")%>
                        <br />
                        <div style="margin-left:55px;">
                        <span id="MSDisplay">
                        <%=Html.Encode(Item.MSRating.Name)%>
                        </span>
                        /
                        <span id="AQDisplay">
                        <%=Html.Encode(Item.AQRating.Name)%>
                        </span>
                        </div>
                    </td>
                </tr>
                <tr class="even-row">
                    <td style="white-space:nowrap;">
                        <label for="BaseMove">Base Move:</label>
                        <%=Html.TextBox("BaseMove", Item.BaseMove, New With {.class = "title", .style = "width:30px;"})%>
                        <%= Html.ValidationMessage("BaseMove", "*") %>
                    </td>
                    <td style="white-space:nowrap;">
                        <label for="MaxPace">Max Pace:</label>
                        <%=Html.DropDownList("MaxPace_ID")%>
                        <%=Html.ValidationMessage("MaxPace_ID", "*")%>
                        <br />
                        <div id="PaceDisplay" style="margin-left:70px;">
                        <%=Html.Encode(Item.MaxPace.Name)%>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <label for="MMBonus">MM Bonus:</label>
                        <%=Html.TextBox("MMBonus", Item.MMBonus, New With {.class = "title", .style = "width:30px;"})%>
                        <%= Html.ValidationMessage("MMBonus", "*") %>
                    </td>
                </tr>
                <tr class="odd-row">
                    <td style="white-space:nowrap;">
                        <label for="BaseHits">Base Hits:</label>
                        <%=Html.TextBox("BaseHits", Item.BaseHits, New With {.class = "title", .style = "width:30px;"})%>
                        <%=Html.DropDownList("HitMod_ID")%>
                        <%= Html.ValidationMessage("BaseHits", "*") %>
                        <%=Html.ValidationMessage("HitMod_ID", "[*]")%>
                    </td>
                    <td style="white-space:nowrap;">
                        <label for="Criticals_ID">Criticals:</label>
                        <%=Html.DropDownList("Criticals_ID")%>
                        <%=Html.DropDownList("CriticalsIgnore_ID")%>
                        <%=Html.ValidationMessage("Criticals_ID", "*")%>
                        <%= Html.ValidationMessage("IgnoreStun", "*") %>
                        <%= Html.ValidationMessage("IgnoreBleeders", "*") %>
                        <br />
                        <div style="margin-left:0px;">
                        <span id="CritDisplay">
                        <%=Html.Encode(Item.Criticals.Name)%>
                        </span>
                        <br />
                        <span id="IgnoreDisplay">
                            <%=Html.Encode(Item.CriticalIgnore.Name)%>
                        </span>
                        </div>
                    </td>
                    <td style="white-space:nowrap;">
                        <label for="AT">AT (DB):</label>
                        <%=Html.TextBox("AT", Item.AT, New With {.class = "title", .style = "width:20px;"})%>
                        <label for="DB">(</label>
                        <%=Html.TextBox("DB", Item.DB, New With {.class = "title", .style = "width:30px;"})%>
                        <label for="DB">)</label>
                        <%= Html.ValidationMessage("AT", "*") %>
                        <%=Html.ValidationMessage("DB", "(*)")%>
                    </td>
                </tr>
                <tr class="even-row">
                    <td style="white-space:nowrap;">
                        <label for="MinEncountered"># Enc:</label>
                        <%=Html.TextBox("MinEncountered", Item.MinEncountered, New With {.class = "title", .style = "width:20px;"})%>
                        <label for="MaxEncountered">-</label>
                        <%=Html.TextBox("MaxEncountered", Item.MaxEncountered, New With {.class = "title", .style = "width:20px;"})%>
                        <%= Html.ValidationMessage("MaxEncountered", "*") %>
                        <%= Html.ValidationMessage("MinEncountered", "*") %>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr class="odd-row">
                    <td colspan="3" style="white-space:nowrap;">
                        <label for="Attacks">Attacks:</label>
                        <% Dim F = True%>
                        <% For Each At In Item.Attacks%>
                            <%if F then%>
                                <%F = False%>
                            <%else %>
                                <div style="float:left; margin:0 5px 0 5px;">/ </div>
                            <%End If%>
                            <div class="AttackLink" style="float:left;"> 
                                <a href="<%=Url.RouteUrl("CreatureAttack", New With {.Action = "Edit", .ID = At.ID, .Creature_ID = At.Creature.ID})%>">
                                    
                                    <%--<%Html.RenderPartial("/Views/Attack/Details.ascx", At)%><br />--%>
                                    
                                    <%Html.RenderPartial("/Views/Attack/DetailsFull.ascx", At)%>
                                </a>
                            </div>
                        <%Next%>
                    </td>
                </tr>
                <tr class="even-row">
                    <td colspan="2" style="white-space:nowrap;">
                        <label for="Habitat">Habitat:</label>
                        <%=Html.TextBox("Habitat", Item.Habitat, New With {.class = "title"})%>
                    </td>
                    <td rowspan="2" style="white-space:nowrap;">
                        <div style="float:left; margin-top:5px; margin-right:2px;">
                        <label for="Description">Description:</label>
                        </div>
                        <div style="float:left;">
                        <%=Html.TextArea("Description", Item.Description, New With {.class = "title", .style = "height:60px; width:400px;"})%>
                        </div>
                        <%= Html.ValidationMessage("Description", "*") %>
                    </td>
                </tr>
                <tr class="odd-row">
                    <td colspan="2" style="white-space:nowrap;">
                        <label for="Outlook">Outlook (IQ):</label>
                        <%=Html.DropDownList("Outlook_ID")%>
                        <label for="IQ">(</label>
                        <%=Html.DropDownList("IQ_ID")%>
                        <label for="IQ">)</label>
                        <%= Html.ValidationMessage("Outlook", "*") %>
                        <%= Html.ValidationMessage("IQ", "*") %>
                        <br />
                        <div style="margin-left:100px;">
                        <span id="OutlookDisplay">
                        <%=Html.Encode(Item.Outlook.Name)%>
                        </span>
                        <span id="IQDisplay">
                            (<%=Html.Encode(Item.IQ.Name)%>)
                        </span>
                        </div>
                    </td>
                </tr>
            </table>
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


