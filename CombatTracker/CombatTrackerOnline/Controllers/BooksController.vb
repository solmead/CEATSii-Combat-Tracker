Public Class BooksController
    Inherits BaseController

    <Authorize(Roles:="Administrator,GM")> _
    Function Index(ByVal page As Nullable(Of Integer), ByVal Format As Nullable(Of ReturnFormat)) As ActionResult
        Dim PaginatedItems As PaginatedList(Of Book)
        If Not (Format.HasValue AndAlso (Format = ReturnFormat.JSON OrElse Format = ReturnFormat.XML)) Then
            If Not page.HasValue Then page = 1
        End If
        Dim CList As IQueryable(Of Book)
        CList = From P In DB.Books Order By P.Name Select P

        If page.HasValue Then
            PaginatedItems = New PaginatedList(Of Book)(CList, page, 10, "Book", "DefaultPaging")
        Else
            PaginatedItems = New PaginatedList(Of Book)(CList, page, CList.Count + 10, "Book", "DefaultPaging")
        End If

        If Format = ReturnFormat.JSON Then
            Dim List = From C In PaginatedItems.ToList Select C.ID, C.Name
            Return Json(List)
        Else
            Return View(PaginatedItems)
        End If
    End Function

    '
    ' GET: /BannerAd/Create

    <Authorize(Roles:="Administrator,GM")> _
    Function Create() As ActionResult
        Dim P = New Book

        Return View(P)
    End Function

    '
    ' POST: /BannerAd/Create

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Create(ByVal collection As FormCollection) As ActionResult
        Dim P = New Book
        Try
            UpdateModel(P)


            P.Save(DB)
            Return RedirectToAction("Index")
        Catch ex As Exception
            AddRuleViolations(P.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)
            Return View(P)
        End Try
    End Function
    <Authorize(Roles:="Administrator,GM,Player")> _
    Function Details(ByVal id As Integer) As ActionResult
        Dim p = Book.Load(DB, id)

        Return View(p)
    End Function
    '
    ' GET: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    Function Edit(ByVal id As Integer) As ActionResult
        Dim p = Book.Load(DB, id)

        Return View(p)
    End Function

    '
    ' POST: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
        Dim P = Book.Load(DB, id)
        Try
            UpdateModel(P)

            P.Save(DB)
            Return RedirectToAction("Index")
        Catch ex As Exception
            AddRuleViolations(P.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)
            Return View(P)
        End Try
    End Function


    '
    ' GET: /BannerAd/Delete/5

    <Authorize(Roles:="Administrator,GM")> _
    Function Delete(ByVal id As Integer) As ActionResult
        Dim V = Book.Load(DB, id)
        V.Delete(DB)
        Return RedirectToRoute("Default", New With {.controller = "Book", .Action = "Index"})
    End Function
End Class
