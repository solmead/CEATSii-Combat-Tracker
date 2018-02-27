Public Class ArmorController
    Inherits BaseController

    Function Index(ByVal page As Nullable(Of Integer), ByVal Format As Nullable(Of ReturnFormat)) As ActionResult
        Dim PaginatedItems As PaginatedList(Of Armor)
        If Not (Format.HasValue AndAlso (Format = ReturnFormat.JSON OrElse Format = ReturnFormat.XML)) Then
            If Not page.HasValue Then page = 1
        End If
        Dim CList As IQueryable(Of Armor)
        CList = From P In DB.Armors Order By P.Type Select P

        If page.HasValue Then
            PaginatedItems = New PaginatedList(Of Armor)(CList, page, 10, "Armor", "DefaultPaging")
        Else
            PaginatedItems = New PaginatedList(Of Armor)(CList, page, CList.Count + 10, "Armor", "DefaultPaging")
        End If

        If Format = ReturnFormat.JSON Then
            Dim List = From C In PaginatedItems.ToList Select C.ID, C.Type
            Return Json(List)
        Else
            Return View(PaginatedItems)
        End If
    End Function

    '
    ' GET: /BannerAd/Create

    Function Create() As ActionResult
        Dim P = New Armor

        Return View(P)
    End Function

    '
    ' POST: /BannerAd/Create

    <AcceptVerbs(HttpVerbs.Post)> _
    Function Create(ByVal collection As FormCollection) As ActionResult
        Dim P = New Armor
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
    Function Details(ByVal id As Integer) As ActionResult
        Dim p = Armor.Load(DB, id)

        Return View(p)
    End Function
    '
    ' GET: /BannerAd/Edit/5

    Function Edit(ByVal id As Integer) As ActionResult
        Dim p = Armor.Load(DB, id)

        Return View(p)
    End Function

    '
    ' POST: /BannerAd/Edit/5

    <AcceptVerbs(HttpVerbs.Post)> _
    Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
        Dim P = Armor.Load(DB, id)
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

    Function Delete(ByVal id As Integer) As ActionResult
        Dim V = Armor.Load(DB, id)
        V.Delete(DB)
        Return RedirectToRoute("Default", New With {.controller = "Armor", .Action = "Index"})
    End Function
End Class
