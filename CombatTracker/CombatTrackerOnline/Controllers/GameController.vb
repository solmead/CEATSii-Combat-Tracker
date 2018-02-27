Public Class GameController
    Inherits BaseController

    <Authorize(Roles:="Administrator,GM,Player")> _
    Function Index(ByVal Format As Nullable(Of ReturnFormat)) As ActionResult


        ViewData("GMGames") = (From p In CurrentUser.GamesGMed(DB) Order By p.Name).ToList
        ViewData("PlayedGames") = (From p In CurrentUser.GamesPlayed(DB) Order By p.Name).ToList

        If Format = ReturnFormat.JSON Then
            Dim List = From p In CurrentUser.GamesGMed(DB) Order By p.Name Select p.ID, p.Name
            List = List.Union(From p In CurrentUser.GamesPlayed(DB) Order By p.Name Select p.ID, p.Name)

            Return Json(List.ToList)
        Else
            Return View()
        End If
    End Function

    '
    ' GET: /BannerAd/Create
    <Authorize(Roles:="Administrator,GM")> _
    Function Create() As ActionResult
        Dim P = New Game
        Return View(P)
    End Function

    '
    ' POST: /BannerAd/Create

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Create(ByVal collection As FormCollection) As ActionResult
        Dim P = New Game
        Try
            UpdateModel(P)
            P.GM = CurrentUser
            P.CurrentTime = 0

            P.Save(DB)
            Return RedirectToAction("Details", New With {.id = P.ID})
        Catch ex As Exception
            AddRuleViolations(P.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)
            Return View(P)
        End Try
    End Function
    <Authorize(Roles:="Administrator,GM,Player")> _
    Function Details(ByVal id As Integer) As ActionResult
        Dim p = Game.Load(DB, id)
        CurrentGame = p
        Return View(p)
    End Function
    '
    ' GET: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    Function Edit(ByVal id As Integer) As ActionResult
        Dim p = Game.Load(DB, id)

        Return View(p)
    End Function

    '
    ' POST: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
        Dim P = Game.Load(DB, id)
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
        Dim V = Game.Load(DB, id)
        V.Delete(DB)
        Return RedirectToRoute("Default", New With {.controller = "Game", .Action = "Index"})
    End Function
End Class
