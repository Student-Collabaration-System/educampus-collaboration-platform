import { useState } from "react";
import { Shield, Flag, Users, BarChart3, Eye, X, AlertTriangle, Trash2 } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { toast } from "sonner@2.0.3";

interface Report {
  id: string;
  contentType: string;
  reportedBy: string;
  reason: string;
  date: string;
  status: "pending" | "reviewed" | "resolved";
  details?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  university: string;
  status: "active" | "suspended";
  joinDate: string;
}

export default function AdminDashboard() {
  const [reports, setReports] = useState<Report[]>([
    {
      id: "R001",
      contentType: "Resource",
      reportedBy: "john.doe@uni-potsdam.de",
      reason: "Inappropriate content",
      date: "2026-01-07",
      status: "pending",
      details: "Contains offensive language",
    },
    {
      id: "R002",
      contentType: "Message",
      reportedBy: "jane.smith@fh-potsdam.de",
      reason: "Spam",
      date: "2026-01-06",
      status: "pending",
      details: "Repetitive promotional content",
    },
    {
      id: "R003",
      contentType: "Group",
      reportedBy: "alex.johnson@ue-germany.com",
      reason: "Harassment",
      date: "2026-01-05",
      status: "reviewed",
      details: "Hostile group environment",
    },
    {
      id: "R004",
      contentType: "Resource",
      reportedBy: "sarah.williams@uni-potsdam.de",
      reason: "Copyright violation",
      date: "2026-01-04",
      status: "resolved",
      details: "Unauthorized textbook upload",
    },
  ]);

  const [users, setUsers] = useState<User[]>([
    {
      id: "U001",
      name: "John Doe",
      email: "john.doe@uni-potsdam.de",
      university: "University of Potsdam",
      status: "active",
      joinDate: "2025-09-15",
    },
    {
      id: "U002",
      name: "Jane Smith",
      email: "jane.smith@fh-potsdam.de",
      university: "FH Potsdam",
      status: "active",
      joinDate: "2025-09-20",
    },
    {
      id: "U003",
      name: "Alex Johnson",
      email: "alex.johnson@ue-germany.com",
      university: "UE Germany",
      status: "active",
      joinDate: "2025-10-01",
    },
    {
      id: "U004",
      name: "Sarah Williams",
      email: "sarah.williams@uni-potsdam.de",
      university: "University of Potsdam",
      status: "suspended",
      joinDate: "2025-08-30",
    },
  ]);

  const handleDismissReport = (reportId: string) => {
    setReports(reports.map(r => r.id === reportId ? { ...r, status: "resolved" } : r));
    toast.success("Report dismissed");
  };

  const handleReviewReport = (reportId: string) => {
    setReports(reports.map(r => r.id === reportId ? { ...r, status: "reviewed" } : r));
    toast.info("Report marked as reviewed");
  };

  const handleRemoveContent = (reportId: string) => {
    setReports(reports.map(r => r.id === reportId ? { ...r, status: "resolved" } : r));
    toast.success("Content removed successfully");
  };

  const handleWarnUser = (reportId: string) => {
    toast.success("Warning sent to user");
  };

  const handleSuspendUser = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: "suspended" } : u));
    toast.success("User suspended");
  };

  const handleActivateUser = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: "active" } : u));
    toast.success("User activated");
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
    toast.success("User account deleted");
  };

  const stats = {
    totalUsers: users.length,
    totalResources: 156,
    pendingReports: reports.filter(r => r.status === "pending").length,
    activeGroups: 24,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "reviewed":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUserStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage reports, users, and platform moderation</p>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Resources</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalResources}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Reports</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingReports}</p>
              </div>
              <Flag className="h-8 w-8 text-red-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Groups</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeGroups}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reports" className="space-y-4">
          <TabsList>
            <TabsTrigger value="reports">Reported Content</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>

          {/* Reported Content Tab */}
          <TabsContent value="reports">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Reported Content</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report ID</TableHead>
                        <TableHead>Content Type</TableHead>
                        <TableHead>Reported By</TableHead>
                        <TableHead>Reason</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell className="font-medium">{report.id}</TableCell>
                          <TableCell>{report.contentType}</TableCell>
                          <TableCell className="max-w-[200px] truncate">
                            {report.reportedBy}
                          </TableCell>
                          <TableCell>{report.reason}</TableCell>
                          <TableCell>
                            {new Date(report.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                title="View Content"
                                onClick={() => toast.info(`Viewing content for ${report.id}`)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              {report.status === "pending" && (
                                <>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    title="Dismiss Report"
                                    onClick={() => handleDismissReport(report.id)}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    title="Remove Content"
                                    onClick={() => handleRemoveContent(report.id)}
                                  >
                                    <Trash2 className="h-4 w-4 text-red-600" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    title="Warn User"
                                    onClick={() => handleWarnUser(report.id)}
                                  >
                                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* User Management Tab */}
          <TabsContent value="users">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">User Management</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>University</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell className="max-w-[200px] truncate">
                            {user.email}
                          </TableCell>
                          <TableCell>{user.university}</TableCell>
                          <TableCell>
                            <Badge className={getUserStatusColor(user.status)}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(user.joinDate).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                title="View Profile"
                                onClick={() => toast.info(`Viewing profile for ${user.name}`)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              {user.status === "active" ? (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  title="Suspend User"
                                  onClick={() => handleSuspendUser(user.id)}
                                >
                                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                                </Button>
                              ) : (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  title="Activate User"
                                  onClick={() => handleActivateUser(user.id)}
                                >
                                  <Users className="h-4 w-4 text-green-600" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                title="Delete Account"
                                onClick={() => handleDeleteUser(user.id)}
                              >
                                <Trash2 className="h-4 w-4 text-red-600" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
