Public Class AttackController
    Inherits BaseController

    

    '
    ' GET: /BannerAd/Create

    <Authorize(Roles:="Administrator,GM")> _
    Function Create(ByVal Creature_ID As Integer) As ActionResult
        Dim P = New Attack
        Return View(P)
    End Function

    '
    ' POST: /BannerAd/Create

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Create(ByVal Creature_ID As Integer, ByVal collection As FormCollection) As ActionResult
        Dim P = New Attack
        Try
            UpdateModel(P)
            P.CreatureOn_ID = Creature_ID

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
        Dim p = Attack.Load(DB, id)

        Return View(p)
    End Function
    '
    ' GET: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    Function Edit(ByVal id As Integer) As ActionResult
        Dim p = Attack.Load(DB, id)

        Return View(p)
    End Function

    '
    ' POST: /BannerAd/Edit/5

    <Authorize(Roles:="Administrator,GM")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
        Dim P = Attack.Load(DB, id)
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
        Dim V = Attack.Load(DB, id)
        V.Delete(DB)
        Return RedirectToRoute("Default", New With {.controller = "Attack", .Action = "Index"})
    End Function
End Class
