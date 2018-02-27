Public Class CreatureController
    Inherits BaseController

    <Authorize(Roles:="Administrator,GM")> _
    Function Index(ByVal page As Nullable(Of Integer), ByVal Format As Nullable(Of ReturnFormat)) As ActionResult
        Dim PaginatedItems As PaginatedList(Of Creature)
        If Not (Format.HasValue AndAlso (Format = ReturnFormat.JSON OrElse Format = ReturnFormat.XML)) Then
            If Not page.HasValue Then page = 1
        End If
        Dim CList As IQueryable(Of Creature)
        CList = From P In DB.Creatures Order By P.TypeName Select P

        If page.HasValue Then
            PaginatedItems = New PaginatedList(Of Creature)(CList, page, 10, "Creature", "DefaultPaging")
        Else
            PaginatedItems = New PaginatedList(Of Creature)(CList, page, CList.Count + 10, "Creature", "DefaultPaging")
        End If

        If Format = ReturnFormat.JSON Then
            Dim List = From C In PaginatedItems.ToList Select C.ID, C.TypeName
            Return Json(List)
        Else
            Return View(PaginatedItems)
        End If
    End Function

    
    Private Sub SetupData(ByVal P As Creature)


        ViewData("LevelMod_ID") = (From V In DB.LevelCharts Select New SelectListItem With {.Text = V.Name, .Value = V.ID, .Selected = P.LevelMod_ID = V.ID}).ToList
        ViewData("Size_ID") = (From V In DB.SizeRatings Order By V.ID Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.Size_ID = V.ID}).ToList
        ViewData("MSRating_ID") = (From V In DB.SpeedCharts Order By V.ID Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.MSRating_ID = V.ID}).ToList
        ViewData("AQRating_ID") = (From V In DB.SpeedCharts Order By V.ID Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.AQRating_ID = V.ID}).ToList
        ViewData("MaxPace_ID") = (From V In DB.Paces Order By V.ID Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.MaxPace_ID = V.ID}).ToList
        ViewData("HitMod_ID") = (From V In DB.ConstitutionBonusCharts Select New SelectListItem With {.Text = V.Code, .Value = V.ID, .Selected = P.HitMod_ID = V.ID}).ToList
        ViewData("Criticals_ID") = (From V In DB.CriticalCodes Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.Criticals_ID = V.ID}).ToList

        ViewData("Book_ID") = (From B In DB.Books Order By B.Name Select New SelectListItem With {.Text = B.Name, .Value = B.ID, .Selected = P.Book_ID = B.ID}).ToList

        ViewData("CriticalsIgnore_ID") = (From V In DB.CriticalIgnores Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.CriticalsIgnore_ID = V.ID}).ToList


        ViewData("Outlook_ID") = (From V In DB.Outlooks Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.Outlook_ID = V.ID}).ToList
        ViewData("IQ_ID") = (From V In DB.IQs Select New SelectListItem With {.Text = V.Abbreviation, .Value = V.ID, .Selected = P.IQ_ID = V.ID}).ToList

    End Sub
    Private Sub updateData(ByVal P As Creature)
        Return
        If P.LevelMod Is Nothing OrElse P.LevelMod.ID <> P.LevelMod_ID Then
            P.LevelMod = LevelChart.Load(DB, P.LevelMod_ID)
        End If
        If P.HitMod Is Nothing OrElse P.HitMod.ID <> P.HitMod_ID Then
            P.HitMod = ConstitutionBonusChart.Load(DB, P.HitMod_ID)
        End If
        If P.Size Is Nothing OrElse P.Size.ID <> P.Size_ID Then
            P.Size = SizeRating.Load(DB, P.Size_ID)
        End If
        If P.MSRating Is Nothing OrElse P.MSRating.ID <> P.MSRating_ID Then
            P.MSRating = SpeedChart.Load(DB, P.MSRating_ID)
        End If
        If P.AQRating Is Nothing OrElse P.AQRating.ID <> P.AQRating_ID Then
            P.AQRating = SpeedChart.Load(DB, P.AQRating_ID)
        End If
    End Sub

    '
    ' GET: /BannerAd/Create

    <Authorize(Roles:="Administrator,GM")> _
    Function Create() As ActionResult
        Dim P = New Creature
        SetupData(P)

        Return View(P)
    End Function

    '
    ' POST: /BannerAd/Create

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Create(ByVal collection As FormCollection) As ActionResult
        Dim P = New Creature
        Try
            UpdateModel(P)
            P.Save(DB)
            Return RedirectToAction("Index")
        Catch ex As Exception
            AddRuleViolations(P.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)
            SetupData(P)

            Return View(P)
        End Try
    End Function
    <Authorize(Roles:="Administrator,GM,Player")> _
    Function Details(ByVal id As Integer) As ActionResult
        Dim p = Creature.Load(DB, id)

        Return View(p)
    End Function
    '
    ' GET: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    Function Edit(ByVal id As Integer) As ActionResult
        Dim p = Creature.Load(DB, id)
        SetupData(p)

        Return View(p)
    End Function

    '
    ' POST: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
        Dim P = Creature.Load(DB, id)
        Try
            UpdateModel(P)

            P.Save(DB)
            Return RedirectToAction("Index")
        Catch ex As Exception
            AddRuleViolations(P.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)
            SetupData(P)

            Return View(P)
        End Try
    End Function


    '
    ' GET: /BannerAd/Delete/5

    <Authorize(Roles:="Administrator")> _
    Function Delete(ByVal id As Integer) As ActionResult
        Dim V = Creature.Load(DB, id)
        V.Delete(DB)
        Return RedirectToRoute("Default", New With {.controller = "Creature", .Action = "Index"})
    End Function
End Class
