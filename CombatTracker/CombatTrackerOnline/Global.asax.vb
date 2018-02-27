' Note: For instructions on enabling IIS6 or IIS7 classic mode, 
' visit http://go.microsoft.com/?LinkId=9394802
Imports darrenjohnstone.net.FileUpload

Public Class MvcApplication
    Inherits System.Web.HttpApplication

    Shared Sub RegisterRoutes(ByVal routes As RouteCollection)
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}")

        ' MapRoute takes the following parameters, in order:
        ' (1) Route name
        ' (2) URL with parameters
        ' (3) Parameter defaults

        routes.MapRoute( _
            "CreatureAttack", _
            "Creature/Edit/{Creature_id}/Attack/{action}/{id}", _
            New With {.controller = "Attack", .action = "Index", .id = ""} _
        )

        routes.MapRoute( _
            "GameDefault", _
            "Game/Details/{id}", _
            New With {.controller = "Game", .action = "Details", .id = ""} _
        )
        routes.MapRoute( _
            "GameStuff", _
            "Game/Details/{game_id}/{action}/{id}", _
            New With {.controller = "Game", .action = "Index", .id = ""} _
        )
        routes.MapRoute( _
            "DefaultPaging", _
            "{controller}/Page/{page}", _
            New With {.controller = "Home", .action = "Index"} _
        )
        routes.MapRoute( _
            "Default", _
            "{controller}/{action}/{id}", _
            New With {.controller = "Game", .action = "Index", .id = ""} _
        )

    End Sub


    Sub Application_Start()
        RegisterRoutes(RouteTable.Routes)
        SetupDB()

        UploadManager.Instance.ProcessorType = GetType(FileSystemProcessor)
        AddHandler UploadManager.Instance.ProcessorInit, New FileProcessorInitEventHandler(AddressOf Processor_Init)
        CleanAsyncDirectory()
        CleanArchiveDirectory()
    End Sub


    Sub SetupDB()
        If DataHandling.Settings.DB_Name = "" Then
            DataHandling.Settings.DB_ServerName = "Localhost\sqlexpress"
            DataHandling.Settings.DB_Name = "RMSS"
            DataHandling.Settings.DB_UserName = "rmss"
            DataHandling.Settings.DB_Password = "rmss12"
        End If
    End Sub


    Public Sub Processor_Init(ByVal sender As Object, ByVal args As FileProcessorInitEventArgs)
        Dim processor As FileSystemProcessor = args.Processor
        ' Set up the download path here - default to the root of the web application
        processor.OutputPath = processor.OutputPath & "/Uploads/AsyncUploads"
    End Sub

    Sub Session_Start(ByVal sender As Object, ByVal e As EventArgs)
        Debug.WriteLine(Now & ": Session Start")
        Session("CurrentGame_ID") = 0
    End Sub



    Sub Session_End(ByVal sender As Object, ByVal e As EventArgs)

        Debug.WriteLine(Now & ": Session End")

        Try



            'Dim Guid As String = Session("FileGUID")

            'Session("FileNamePath")

            Dim FName As String = Session("FileNamePath") 'Server.MapPath("/Uploads/AsyncUploads/" & Guid & ".tmp")

            If FName <> "" Then

                Dim FI As New System.IO.FileInfo(FName)

                If FI.Exists Then

                    FI.Delete()

                End If

            End If

        Catch ex As Exception
            Dim i As Integer = 0
        End Try

    End Sub

    Private Sub CleanArchiveDirectory()

        Dim S As String = ""
        Try
            Dim DI As New System.IO.DirectoryInfo(Server.MapPath("/Uploads/Temp/Archive"))
            If Not DI.Exists Then DI.Create()
            For Each DI2 In DI.GetDirectories
                For Each FI In DI2.GetFiles
                    If Now.Subtract(FI.LastWriteTime).TotalDays > 7 OrElse Now.Subtract(FI.CreationTime).TotalDays > 7 OrElse Now.Subtract(FI.LastAccessTime).TotalDays > 7 Then
                        Try
                            FI.Attributes = IO.FileAttributes.Normal
                            FI.IsReadOnly = False
                            FI.Delete()
                        Catch ex As Exception

                            Dim i As Integer = 0
                            S = S & ex.ToString & vbCrLf
                        End Try
                    End If
                Next

                DI2.Refresh()

                If DI2.GetFiles.Count = 0 Then
                    Try
                        DI2.Delete()
                    Catch ex As Exception
                        Dim i As Integer = 0
                        S = S & ex.ToString & vbCrLf
                    End Try
                End If
            Next

        Catch ex As Exception
            Dim i As Integer = 0
            S = S & ex.ToString & vbCrLf
        End Try

        If S.Length > 0 Then
            Dim FI As New System.IO.FileInfo(Server.MapPath("/Uploads/Temp/Archive/Error.txt"))
            If FI.Exists Then FI.Delete()
            Dim SW = New IO.StreamWriter(FI.OpenWrite())
            SW.Write(S)
            SW.Close()
        End If
    End Sub

    Private Sub CleanAsyncDirectory()
        Try
            Dim DI As New System.IO.DirectoryInfo(Server.MapPath("/Uploads/AsyncUploads"))
            If Not DI.Exists Then DI.Create()
            For Each fi In DI.GetFiles
                Try
                    fi.Delete()
                Catch ex2 As Exception
                    Dim i As Integer = 0
                End Try
            Next
        Catch ex As Exception
            Dim i As Integer = 0
        End Try
    End Sub
End Class
