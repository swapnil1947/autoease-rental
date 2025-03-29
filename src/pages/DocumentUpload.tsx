
import React, { useState } from 'react';
import { Upload, Shield, Info, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface DocumentStatus {
  id: string;
  name: string;
  status: 'pending' | 'approved' | 'rejected' | 'not_uploaded';
  message?: string;
}

const DocumentUpload = () => {
  const [documents, setDocuments] = useState<DocumentStatus[]>([
    { id: 'id_proof', name: 'ID Proof', status: 'approved' },
    { id: 'driving_license', name: 'Driving License', status: 'approved' },
    { id: 'insurance', name: 'Insurance', status: 'rejected', message: 'Document is expired. Please upload a valid insurance document.' },
    { id: 'address_proof', name: 'Address Proof', status: 'not_uploaded' },
  ]);
  
  const [activeTab, setActiveTab] = useState('upload');
  
  const handleUpload = (documentId: string) => {
    // In a real app, this would open a file picker and upload to server
    const updatedDocuments = documents.map(doc => 
      doc.id === documentId 
        ? { ...doc, status: 'pending' as const } 
        : doc
    );
    setDocuments(updatedDocuments);
  };
  
  const getStatusColor = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'approved':
        return 'text-green-500';
      case 'rejected':
        return 'text-red-500';
      case 'pending':
        return 'text-yellow-500';
      default:
        return 'text-muted-foreground';
    }
  };
  
  const getStatusIcon = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <Info className="h-5 w-5 text-yellow-500" />;
      default:
        return <X className="h-5 w-5 text-muted-foreground" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Document Verification</h1>
          <p className="text-muted-foreground mb-8">
            Upload your documents for verification to ensure a secure rental experience.
          </p>
          
          <Tabs defaultValue="upload" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upload">Upload Documents</TabsTrigger>
              <TabsTrigger value="status">Verification Status</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="space-y-6">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Please ensure all documents are clear, valid, and match the information in your profile. 
                  All files must be in JPG, PNG, or PDF format and less than 5MB in size.
                </AlertDescription>
              </Alert>
              
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>ID Proof</CardTitle>
                    <CardDescription>
                      Upload a government-issued ID card, passport, or driver's license
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="text-center mb-4">
                        Drag and drop your ID document here, or click to browse
                      </p>
                      <Button onClick={() => handleUpload('id_proof')}>
                        Upload Document
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    We accept passport, national ID card, or driver's license
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Driving License</CardTitle>
                    <CardDescription>
                      Upload your valid driving license (front and back)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="text-center mb-4">
                        Drag and drop your driving license here, or click to browse
                      </p>
                      <Button onClick={() => handleUpload('driving_license')}>
                        Upload Document
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    Make sure your license is valid and not expired
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Insurance Document</CardTitle>
                    <CardDescription>
                      Upload your car insurance document (if you're a host)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="text-center mb-4">
                        Drag and drop your insurance document here, or click to browse
                      </p>
                      <Button onClick={() => handleUpload('insurance')}>
                        Upload Document
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    Required only if you're listing your vehicle for rent
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Address Proof</CardTitle>
                    <CardDescription>
                      Upload a utility bill or bank statement showing your address
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="text-center mb-4">
                        Drag and drop your address proof here, or click to browse
                      </p>
                      <Button onClick={() => handleUpload('address_proof')}>
                        Upload Document
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    Document must be less than 3 months old
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="status">
              <Card>
                <CardHeader>
                  <CardTitle>Verification Status</CardTitle>
                  <CardDescription>
                    Check the status of your document verification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map(doc => (
                      <div key={doc.id} className="flex items-start justify-between p-4 border rounded-lg">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(doc.status)}
                          <div>
                            <h4 className="font-medium">{doc.name}</h4>
                            <p className={`text-sm ${getStatusColor(doc.status)}`}>
                              {doc.status === 'approved' && 'Approved'}
                              {doc.status === 'rejected' && 'Rejected'}
                              {doc.status === 'pending' && 'Pending verification'}
                              {doc.status === 'not_uploaded' && 'Not uploaded'}
                            </p>
                            {doc.message && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {doc.message}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <Button 
                          variant={doc.status === 'rejected' || doc.status === 'not_uploaded' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setActiveTab('upload')}
                        >
                          {doc.status === 'rejected' ? 'Re-upload' : 
                           doc.status === 'not_uploaded' ? 'Upload' : 'View'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">Documents are securely stored and encrypted</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocumentUpload;
