
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Settings, Car, CreditCard, 
  FileText, Bell, LogOut, Star, 
  Shield, Calendar, CheckCircle, Clock
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const UserProfile = () => {
  // Dummy user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    joined: 'March 2022',
    profileImage: 'https://source.unsplash.com/7YVZYZeITc8',
    verified: true,
    address: '123 Main St, San Francisco, CA',
    rentals: [
      {
        id: '1',
        car: 'Tesla Model S',
        image: 'https://source.unsplash.com/qIu77BsFdds',
        startDate: '12/10/2023',
        endDate: '12/15/2023',
        price: 450,
        status: 'completed',
        owner: 'Michael Chen'
      },
      {
        id: '2',
        car: 'Porsche 911',
        image: 'https://source.unsplash.com/ZwKCWVFslHE',
        startDate: '01/05/2024',
        endDate: '01/10/2024',
        price: 795,
        status: 'upcoming',
        owner: 'Sarah Williams'
      }
    ],
    listings: [
      {
        id: '1',
        car: 'BMW M4 Competition',
        image: 'https://source.unsplash.com/UsYOap7yIMg',
        price: 145,
        trips: 8,
        earnings: 3480,
        status: 'active'
      }
    ],
    paymentMethods: [
      {
        id: '1',
        type: 'visa',
        last4: '4242',
        expiry: '04/25',
        primary: true
      },
      {
        id: '2',
        type: 'mastercard',
        last4: '8888',
        expiry: '09/26',
        primary: false
      }
    ]
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="flex flex-col items-center text-center mb-6 p-6 bg-background border rounded-lg">
                  <div className="relative mb-4">
                    <img 
                      src={user.profileImage}
                      alt={user.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    {user.verified && (
                      <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground text-sm mb-2">Member since {user.joined}</p>
                  <div className="flex items-center justify-center gap-1 text-sm mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span>4.9</span>
                    <span className="text-muted-foreground">(28 reviews)</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Profile
                  </Button>
                </div>
                
                <div className="bg-background border rounded-lg overflow-hidden">
                  <nav className="flex flex-col">
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 p-3 hover:bg-secondary border-l-2 border-primary"
                    >
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/profile/rentals"
                      className="flex items-center gap-3 p-3 hover:bg-secondary"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>My Rentals</span>
                    </Link>
                    <Link
                      to="/profile/cars"
                      className="flex items-center gap-3 p-3 hover:bg-secondary"
                    >
                      <Car className="h-5 w-5" />
                      <span>My Listings</span>
                    </Link>
                    <Link
                      to="/profile/documents"
                      className="flex items-center gap-3 p-3 hover:bg-secondary"
                    >
                      <FileText className="h-5 w-5" />
                      <span>Documents</span>
                    </Link>
                    <Link
                      to="/profile/payments"
                      className="flex items-center gap-3 p-3 hover:bg-secondary"
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Payment Methods</span>
                    </Link>
                    <Link
                      to="/profile/settings"
                      className="flex items-center gap-3 p-3 hover:bg-secondary"
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Link>
                    <Link
                      to="/profile/notifications"
                      className="flex items-center gap-3 p-3 hover:bg-secondary"
                    >
                      <Bell className="h-5 w-5" />
                      <span>Notifications</span>
                    </Link>
                    <Link
                      to="/logout"
                      className="flex items-center gap-3 p-3 hover:bg-secondary text-destructive"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="dashboard">
                <TabsList className="mb-8">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="rentals">My Rentals</TabsTrigger>
                  <TabsTrigger value="cars">My Cars</TabsTrigger>
                  <TabsTrigger value="earnings">Earnings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="dashboard">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Rentals
                        </CardTitle>
                        <Car className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">
                          +2 from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Active Listings
                        </CardTitle>
                        <Car className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground">
                          Same as last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Earnings
                        </CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$3,480</div>
                        <p className="text-xs text-muted-foreground">
                          +$850 from last month
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">Upcoming Rentals</h3>
                  <div className="space-y-4 mb-8">
                    {user.rentals.filter(rental => rental.status === 'upcoming').map(rental => (
                      <div 
                        key={rental.id}
                        className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg"
                      >
                        <img 
                          src={rental.image}
                          alt={rental.car}
                          className="w-full md:w-40 h-24 object-cover rounded-md"
                        />
                        <div className="flex-grow">
                          <h4 className="font-semibold">{rental.car}</h4>
                          <div className="flex items-center text-sm text-muted-foreground gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{rental.startDate} - {rental.endDate}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                            <User className="h-4 w-4" />
                            <span>Hosted by {rental.owner}</span>
                          </div>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <div className="font-bold">${rental.price}</div>
                          <Badge className="mt-2">Upcoming</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">My Listings</h3>
                  <div className="space-y-4">
                    {user.listings.map(listing => (
                      <div 
                        key={listing.id}
                        className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg"
                      >
                        <img 
                          src={listing.image}
                          alt={listing.car}
                          className="w-full md:w-40 h-24 object-cover rounded-md"
                        />
                        <div className="flex-grow">
                          <h4 className="font-semibold">{listing.car}</h4>
                          <div className="flex items-center text-sm text-muted-foreground gap-2">
                            <Car className="h-4 w-4" />
                            <span>{listing.trips} total trips</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                            <CreditCard className="h-4 w-4" />
                            <span>${listing.earnings} earned</span>
                          </div>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <div className="font-bold">${listing.price}/day</div>
                          <Badge 
                            variant={listing.status === 'active' ? 'default' : 'secondary'}
                            className="mt-2"
                          >
                            {listing.status === 'active' ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center mt-8">
                      <Button asChild>
                        <Link to="/host">List Another Vehicle</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="rentals">
                  <h3 className="text-xl font-semibold mb-4">My Rentals</h3>
                  
                  <div className="space-y-4">
                    {user.rentals.map(rental => (
                      <div 
                        key={rental.id}
                        className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg"
                      >
                        <img 
                          src={rental.image}
                          alt={rental.car}
                          className="w-full md:w-40 h-24 object-cover rounded-md"
                        />
                        <div className="flex-grow">
                          <h4 className="font-semibold">{rental.car}</h4>
                          <div className="flex items-center text-sm text-muted-foreground gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{rental.startDate} - {rental.endDate}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                            <User className="h-4 w-4" />
                            <span>Hosted by {rental.owner}</span>
                          </div>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <div className="font-bold">${rental.price}</div>
                          <Badge 
                            variant={rental.status === 'completed' ? 'secondary' : 'default'}
                            className="mt-2"
                          >
                            {rental.status === 'completed' ? 'Completed' : 'Upcoming'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="cars">
                  <h3 className="text-xl font-semibold mb-4">My Listed Vehicles</h3>
                  
                  <div className="space-y-4">
                    {user.listings.map(listing => (
                      <div 
                        key={listing.id}
                        className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg"
                      >
                        <img 
                          src={listing.image}
                          alt={listing.car}
                          className="w-full md:w-40 h-24 object-cover rounded-md"
                        />
                        <div className="flex-grow">
                          <h4 className="font-semibold">{listing.car}</h4>
                          <div className="flex items-center text-sm text-muted-foreground gap-2">
                            <Car className="h-4 w-4" />
                            <span>{listing.trips} total trips</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                            <CreditCard className="h-4 w-4" />
                            <span>${listing.earnings} earned</span>
                          </div>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <div className="font-bold">${listing.price}/day</div>
                          <Badge 
                            variant={listing.status === 'active' ? 'default' : 'secondary'}
                            className="mt-2"
                          >
                            {listing.status === 'active' ? 'Active' : 'Inactive'}
                          </Badge>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="outline" className="text-destructive">
                              {listing.status === 'active' ? 'Deactivate' : 'Activate'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center mt-8">
                      <Button asChild>
                        <Link to="/host">List Another Vehicle</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="earnings">
                  <h3 className="text-xl font-semibold mb-4">Earnings Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Earned
                        </CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$3,480</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          This Month
                        </CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$850</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Pending Payout
                        </CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$320</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Payouts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b">
                          <div>
                            <p className="font-medium">Weekly Payout</p>
                            <p className="text-sm text-muted-foreground">Jan 15, 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$480</p>
                            <Badge variant="outline" className="bg-green-50">Completed</Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b">
                          <div>
                            <p className="font-medium">Weekly Payout</p>
                            <p className="text-sm text-muted-foreground">Jan 8, 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$370</p>
                            <Badge variant="outline" className="bg-green-50">Completed</Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Weekly Payout</p>
                            <p className="text-sm text-muted-foreground">Jan 1, 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$320</p>
                            <Badge variant="outline" className="bg-green-50">Completed</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
