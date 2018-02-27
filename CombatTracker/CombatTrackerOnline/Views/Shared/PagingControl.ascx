<%@ Control Language="VB" Inherits="System.Web.Mvc.ViewUserControl" %>
<%=""%>
<%  If Model.TotalPages > 1 Then%>
<ul id="pager">
<%If Model.HasPreviousPage Then%>
	<li><%=Html.RouteLink("Previous", Model.PagingRoute.ToString, New With {.controller = Model.Controller, .page = (Model.PageIndex - 1)})%></li>
<%End If%>

<%  For a As Integer = 1 To Model.TotalPages%>
	<%If a = Model.PageIndex Then%>
		<li><%=Html.RouteLink(a.ToString, Model.PagingRoute.ToString, New With {.controller = Model.Controller, .page = a}, New With {.class = "current"})%></li>
	<% Else%>
		<li><%=Html.RouteLink(a.ToString, Model.PagingRoute.ToString, New With {.controller = Model.Controller, .page = a})%></li>
	<%End If%>
<%Next%>

<%If Model.HasNextPage Then%>
	<li><%=Html.RouteLink("Next", Model.PagingRoute.ToString, New With {.controller = Model.Controller, .page = (Model.PageIndex + 1)})%></li>
<% End If%>
</ul>
<%End If%>