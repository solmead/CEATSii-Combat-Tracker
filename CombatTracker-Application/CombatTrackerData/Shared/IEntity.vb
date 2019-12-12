Imports System.Reflection
Imports System.Data
Imports System.Data.Linq


Public MustInherit Class IEntity(Of t)
    Public Shared LastIDSaved As Object

    'Private Shared m_InternalDB As DataContext
    'Private Shared Function DataContext() As DataContext
    '    If m_InternalDB Is Nothing Then
    '        m_InternalDB = BaseData.CVP_DataContext
    '    End If
    '    Return m_InternalDB
    'End Function

    Public ReadOnly Property IsValid() As Boolean
        Get
            Dim List = Me.GetRuleViolations
            Dim Tp As Type = Me.GetType()
            For Each RV In List
                Debug.WriteLine("Type:" & Tp.ToString & " Field:" & RV.PropertyName & " Error:" & RV.ErrorMessage)
            Next
            Return List.Count = 0
        End Get
    End Property

    Public Overridable Function GetRuleViolations() As List(Of RuleViolation)
        Return New List(Of RuleViolation)
    End Function

    Private Shared Function GetKeyProperty() As String
        Dim Tp As Type = GetType(t)

        Tp.GetProperties((BindingFlags.Instance Or BindingFlags.Public Or BindingFlags.FlattenHierarchy))
        Dim MainCA = (From p In Tp.GetProperties((BindingFlags.Instance Or BindingFlags.Public Or BindingFlags.FlattenHierarchy)) From CA In p.GetCustomAttributes(False) Where CA.GetType Is GetType(System.Data.Linq.Mapping.ColumnAttribute) AndAlso CType(CA, System.Data.Linq.Mapping.ColumnAttribute).IsPrimaryKey Select CA, p.Name).FirstOrDefault

        Dim IDString = MainCA.Name
        If IDSTring = "" Then IDSTring = "ID"
        Return IDString
    End Function

    Private Function GetKeyValue() As Object
        Dim Obj As Object = Me.GetType.GetProperty(GetKeyProperty).GetValue(Me, Nothing)
        Return Obj
    End Function


    Protected Overridable Sub HandleLocalDelete()

    End Sub
    Protected Overridable Sub HandleLocalSave()

    End Sub
    Protected Overridable Sub HandleLocalAfterDelete()

    End Sub
    Protected Overridable Sub HandleLocalAfterSave()

    End Sub
    Protected Overridable Sub HandleLocalAfterLoad()

    End Sub

    Private Shared Function Convert(ByVal Entity As IEntity(Of t)) As t
        Return CType(CType(Entity, Object), t)
    End Function
    Private Shared Function Convert(ByVal Entity As t) As IEntity(Of t)
        Return CType(CType(Entity, Object), IEntity(Of t))
    End Function
    'Public Shared Function GetList() As IQueryable(Of t)
    '    Return GetList(DataContext)
    'End Function
    Public Shared Function GetList(ByVal DB As DataContext) As IQueryable(Of t)
        If DB IsNot Nothing Then
            Return From I As t In DB.GetTable(GetType(t)) Select I
        Else
            Dim L As New List(Of t)
            Return L.AsQueryable
        End If
    End Function
    'Public Shared Function Load(ByVal ID As Integer) As t

    'End Function
    Public Shared Function Load(ByVal DB As DataContext, ByVal ID As Object, Optional ByVal ReturnNothing As Boolean = False) As t
        Dim Tp As Type = GetType(t)
        If DB IsNot Nothing Then
            'Dim p = Tp.GetProperty("ID")
            Dim ColName As String = GetKeyProperty()
            Dim TableName As String = ""
            'Dim PropCAs = From CA In p.GetCustomAttributes(False) Where CA.GetType Is GetType(System.Data.Linq.Mapping.ColumnAttribute) Select CA
            'If PropCAs.Count > 0 Then
            ' Dim ca As System.Data.Linq.Mapping.ColumnAttribute = PropCAs.First
            'ColName = ca.Name
            'End If
            'If ColName = "" Then
            '    ColName = "ID"
            'End If


            Dim ObjCAs = From CA In Tp.GetCustomAttributes(False) Where CA.GetType Is GetType(System.Data.Linq.Mapping.TableAttribute) Select CA
            If ObjCAs.Count > 0 Then
                Dim ca As System.Data.Linq.Mapping.TableAttribute = ObjCAs.First
                TableName = ca.Name
            End If


            'Dim st As String = List.ToString & " where [t0].[" & ColName & "]={0}"
            'Dim st As String = List.ToString & " where [t0].[ID]={0}"
            Dim st As String = "Select * from " & TableName & " where " & ColName & "={0}"
            Dim L2 = DB.ExecuteQuery(Of t)(st, ID.ToString)
            Dim L As New List(Of t)
            L.AddRange(L2)
            If L.Count > 0 Then
                Return L.First
            ElseIf Not ReturnNothing Then
                Dim O As Object = Tp.Assembly.CreateInstance(Tp.FullName, True)

                Return CType(O, t)
            End If
        ElseIf Not ReturnNothing Then

            Dim O As Object = Tp.Assembly.CreateInstance(Tp.FullName, True)

            Return CType(O, t)
        End If
        Return Nothing
    End Function
    'Public Shared Sub Save(ByVal entity As t)

    'End Sub
    Public Shared Sub Save(ByVal DB As DataContext, ByVal entity As t)
        Dim EOrg As IEntity(Of t) = Convert(entity)
        Dim ID As Object = EOrg.GetKeyValue()
        If ((TypeOf (ID) Is Integer AndAlso ID = 0) OrElse (ID Is Nothing)) Then
            EOrg.Save(DB)
        Else
            Dim E1 As t = Load(DB, ID)
            Dim E2 As IEntity(Of t) = Convert(E1)
            EOrg.CopyInto(E1)
            E2.Save(DB)
        End If
    End Sub
    'Public Sub DeletePartial()

    'End Sub
    Public Sub DeletePartial(ByVal DB As DataContext)
        If DB IsNot Nothing Then
            Dim Tp As Type = Me.GetType()
            Dim Tb As ITable
            Try
                Tb = DB.GetTable(Tp)
            Catch ex As Exception
                Tb = DB.GetTable(Tp.BaseType)
            End Try
            Try
                Tb.Attach(Me, True)
            Catch ex As Exception

            End Try
            Tb.DeleteOnSubmit(Me)
            Me.HandleLocalDelete()
        End If
    End Sub
    'Public Sub SavePartial()

    'End Sub
    Public Sub SavePartial(ByVal DB As DataContext)
        If DB IsNot Nothing Then
            Dim ID As Object = Me.GetKeyValue()
            Dim Tp As Type = Me.GetType()
            Dim Tb As ITable
            Try
                Tb = DB.GetTable(Tp)
            Catch ex As Exception
                Tb = DB.GetTable(Tp.BaseType)
            End Try
            If ((TypeOf (ID) Is Integer AndAlso ID = 0) OrElse (ID Is Nothing)) Then
                Tb.InsertOnSubmit(Me)
            Else
                Try
                    Tb.Attach(Me)
                Catch ex As Exception
                    Dim a As Integer = 0
                End Try
            End If
            Me.HandleLocalSave()
        End If
    End Sub
    'Public Shared Sub Delete(ByVal entity As t)

    'End Sub
    Public Shared Sub Delete(ByVal DB As DataContext, ByVal entity As t)
        Dim ID As Integer = CInt(entity.GetType.GetProperty("ID").GetValue(entity, Nothing))
        Dim E As IEntity(Of t) = Convert(Load(DB, ID))
        E.Delete(DB)
    End Sub
    'Public Sub Save()

    'End Sub
    Public Sub Save(ByVal DB As DataContext)
        If DB IsNot Nothing Then
            SavePartial(DB)
            DB.SubmitChanges()
            LastIDSaved = Me.GetKeyValue()
            HandleLocalAfterSave()
        Else
            If Not Me.IsValid Then Throw New Exception("Rule violations prevent saving")
        End If
    End Sub
    'Public Sub Delete()

    'End Sub
    Public Sub Delete(ByVal DB As DataContext)
        If DB IsNot Nothing Then
            'Try
            DeletePartial(DB)
            DB.SubmitChanges()
            HandleLocalAfterDelete()
            'Catch ex As Exception
            '    Dim a As Integer = 1
            'End Try
        End If
    End Sub
    Public Function Clone() As t
        Dim Tp As Type = Me.GetType()
        Dim NewItem As t = CType(Tp.Assembly.CreateInstance(Tp.Name), t)
        Me.CopyInto(NewItem)
        Return NewItem
    End Function
    Public Sub CloneFrom(ByVal NewItem As t)
        Dim NewItem2 As IEntity(Of t) = Convert(NewItem)
        NewItem2.CopyInto(Convert(Me))
    End Sub
    Public Sub CopyInto(ByVal NewItem As t)
        Try
            Dim KeyName = Me.GetKeyValue()
            Dim Tp As Type = Me.GetType()
            Dim props = Tp.GetProperties((BindingFlags.Instance Or BindingFlags.Public Or BindingFlags.FlattenHierarchy))
            For Each p In props
                If p.Name.ToUpper <> KeyName Then

                    Dim V As Object = Nothing
                    Try
                        V = p.GetValue(Me, Nothing)
                    Catch ex As Exception
                        'Debug.WriteLine("Copy Into Error Prop:" & p.Name)
                    End Try
                    Dim TName As String = ""
                    Try
                        TName = p.PropertyType.FullName
                    Catch ex As Exception
                        'WriteDebug(ex.ToString)
                    End Try
                    'WriteDebug("Type = [" & TName & "]")
                    If V Is Nothing Then
                        Dim a As Integer = 1
                    End If
                    If Not TName.Contains("EntitySet") AndAlso Not TName.Contains("IEntity") AndAlso V IsNot Nothing AndAlso p.CanWrite Then
                        If V IsNot Nothing Then
                            Try
                                'WriteDebug(p.Name & "=""" & V & """")
                            Catch ex As Exception
                                'WriteDebug(p.Name & "=[Unknown]")
                            End Try
                        Else
                            'WriteDebug(p.Name & "= Nothing")
                        End If
                        Try
                            Tp.GetProperty(p.Name).SetValue(NewItem, V, Nothing)
                        Catch ex As Exception
                            Dim a As Integer = 1
                        End Try
                    Else
                        'WriteDebug(p.Name & " was an entity.")
                    End If
                End If
            Next
        Catch ex As Exception
            Dim a As Integer = 1
        End Try
    End Sub
End Class

