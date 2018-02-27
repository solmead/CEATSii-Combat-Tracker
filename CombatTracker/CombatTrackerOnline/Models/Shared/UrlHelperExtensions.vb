Imports System.Collections.Generic
Imports System.Text
Imports System.Linq
Imports System.Linq.Expressions
Imports System.Reflection
Imports System.Reflection.Emit
Imports System.Threading
Imports System.Runtime.CompilerServices

Public Module UrlHelperExtensions

    <Extension()> _
    Public Function ImageRouteLink(ByVal source As HtmlHelper, ByVal ImageSource As String, ByVal RouteName As String, ByVal routeValues As Object, ByVal htmlAttributes As Object, ByVal imgAttributes As Object)
        '<a href="<%=Url.VideoDetails(item.ID)%>"><img src="<%=item.WebImagePathAndName%>" alt="" class="video-thumbnail" /></a>
        Dim URL As New UrlHelper(source.ViewContext.RequestContext)
        Dim postAction = URL.RouteUrl(RouteName, routeValues)

        'Dim SB As New StringBuilder
        Dim aTag = New TagBuilder("a")
        aTag.MergeAttribute("href", postAction)
        If htmlAttributes IsNot Nothing Then
            Dim htmlRVD = New RouteValueDictionary(htmlAttributes)
            aTag.MergeAttributes(htmlRVD, True)
        End If
        Dim imgTag = New TagBuilder("img")
        imgTag.MergeAttribute("src", ImageSource)
        If imgAttributes IsNot Nothing Then
            Dim imgRVD = New RouteValueDictionary(imgAttributes)
            imgTag.MergeAttributes(imgRVD, True)
        End If
        aTag.InnerHtml = imgTag.ToString(TagRenderMode.SelfClosing)
        Return aTag.ToString(TagRenderMode.Normal)

    End Function
    '<Extension()> _
    'Public Function DeleteActionLink(ByVal source As HtmlHelper, ByVal linkText As String, ByVal actionName As String, ByVal routeValues As Object, ByVal htmlAttributes As Object) As String
    '    Dim URL As New UrlHelper(source.ViewContext.RequestContext)

    '    Dim postAction = URL.Action(actionName, routeValues)

    '    Dim SB As New StringBuilder

    '    SB.AppendLine("<form action=""" & postAction & """ method=""post"">")
    '    SB.AppendLine(source.ActionLink(linkText, actionName, routeValues, htmlAttributes))
    '    SB.AppendLine("</form>")

    '    Return SB.ToString

    'End Function
    <Extension()> _
    Public Function DeleteActionLink(ByVal source As HtmlHelper, ByVal linkText As String, ByVal actionName As String, ByVal controllerName As String, ByVal routeValues As Object, ByVal htmlAttributes As Object) As String
        Dim URL As New UrlHelper(source.ViewContext.RequestContext)
        Dim postAction = URL.Action(actionName, controllerName, routeValues)

        Dim SB As New StringBuilder


        SB.AppendLine("<form action=""" & postAction & """ method=""post"">")

        Dim btnTag = New TagBuilder("input")

        Dim htmlRVD = New RouteValueDictionary(htmlAttributes)
        btnTag.MergeAttribute("type", "submit")
        btnTag.MergeAttribute("value", linkText)
        btnTag.MergeAttributes(htmlRVD, True)
        'SB.AppendLine(source.ActionLink(linkText, actionName, routeValues, htmlAttributes))
        '<input type="submit" value="Save" class="button" /> 
        SB.AppendLine(btnTag.ToString(TagRenderMode.SelfClosing))
        SB.AppendLine("</form>")

        Return SB.ToString

    End Function

    <Extension()> _
    Public Function UploadFileActionLink(ByVal source As HtmlHelper, ByVal ID As String, ByVal FileGUID As String, ByVal actionName As String, ByVal controllerName As String) As String
        Dim URL As New UrlHelper(source.ViewContext.RequestContext)


        Dim postAction = URL.RouteUrl("Default", New With {.Controller = controllerName, .Action = actionName, .FileGUID = ID & "_" & FileGUID})

        Dim SB As New StringBuilder
        SB.AppendLine(source.Hidden(ID & "_FileGUID", ID & "_" & FileGUID).ToString)
        SB.AppendLine("<input type=""file"" id=""" & ID & """ name=""" & ID & """ />")
        SB.AppendLine("")
        SB.AppendLine("<script type=""text/javascript"">")
        SB.AppendLine("    CreateUploader(""#" & ID & """,""" & postAction & """);")
        SB.AppendLine("</script>")

        Return SB.ToString
    End Function
End Module
