
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, Calendar, Clock, CheckCircle, 
  Info, Shield, AlertCircle
} from 'lucide-react';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  // Dummy rental data
  const rental = {
    car: 'Tesla Model S',
    image: 'https://source.unsplash.com/qIu77BsFdds',
    startDate: '12 May, 2024',
    endDate: '15 May, 2024',
    days: 3,
    location: 'San Francisco, CA',
    price: 89,
    insurance: 45,
    serviceFee: 24,
    total: 336
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    navigate('/payment-confirmation');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground mb-8">
            Complete your booking for {rental.car}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Payment details */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Booking details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Details</CardTitle>
                    <CardDescription>
                      Please confirm your rental information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <img 
                        src={rental.image}
                        alt={rental.car}
                        className="w-full md:w-40 h-24 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{rental.car}</h3>
                        <div className="flex flex-col text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>{rental.startDate} - {rental.endDate} ({rental.days} days)</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-4 w-4" />
                            <span>Pick-up: 10:00 AM | Return: 10:00 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Pick-up Location</h4>
                        <p className="text-sm text-muted-foreground">
                          123 Market Street<br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Return Location</h4>
                        <p className="text-sm text-muted-foreground">
                          123 Market Street<br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Insurance options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Insurance Coverage</CardTitle>
                    <CardDescription>
                      Select your preferred insurance option
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="standard">
                      <div className="grid gap-4">
                        <div className="flex items-start space-x-3 border p-4 rounded-lg">
                          <RadioGroupItem value="standard" id="standard" />
                          <div className="grid gap-1.5">
                            <Label className="font-medium" htmlFor="standard">
                              Standard Coverage
                            </Label>
                            <p className="text-sm text-muted-foreground mb-2">
                              Basic coverage with $1,000 deductible. Covers damages from accidents and theft.
                            </p>
                            <div className="text-sm font-medium">$45 total</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 border p-4 rounded-lg">
                          <RadioGroupItem value="premium" id="premium" />
                          <div className="grid gap-1.5">
                            <Label className="font-medium" htmlFor="premium">
                              Premium Coverage
                            </Label>
                            <p className="text-sm text-muted-foreground mb-2">
                              Enhanced protection with $500 deductible. Additional coverage for tires and glass.
                            </p>
                            <div className="text-sm font-medium">$65 total</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 border p-4 rounded-lg">
                          <RadioGroupItem value="full" id="full" />
                          <div className="grid gap-1.5">
                            <Label className="font-medium" htmlFor="full">
                              Full Coverage
                            </Label>
                            <p className="text-sm text-muted-foreground mb-2">
                              Complete protection with $0 deductible. All-inclusive coverage for any damage.
                            </p>
                            <div className="text-sm font-medium">$85 total</div>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
                
                {/* Payment method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                      Select your preferred payment method
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                      <TabsList className="grid w-full grid-cols-4 mb-6">
                        <TabsTrigger value="card">Credit Card</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                        <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                        <TabsTrigger value="google">Google Pay</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="card">
                        <form onSubmit={handlePaymentSubmit}>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="card-name">Name on Card</Label>
                                <Input id="card-name" placeholder="John Doe" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="card-number">Card Number</Label>
                                <Input id="card-number" placeholder="4242 4242 4242 4242" />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry-month">Expiry Month</Label>
                                <Input id="expiry-month" placeholder="MM" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="expiry-year">Expiry Year</Label>
                                <Input id="expiry-year" placeholder="YY" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" />
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Checkbox id="save-card" />
                              <Label htmlFor="save-card">Save this card for future rentals</Label>
                            </div>
                          </div>
                        </form>
                      </TabsContent>
                      
                      <TabsContent value="paypal">
                        <div className="text-center py-6">
                          <div className="text-2xl font-bold mb-2">PayPal</div>
                          <p className="text-muted-foreground mb-4">
                            You will be redirected to PayPal to complete your payment
                          </p>
                          <Button>Continue with PayPal</Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="apple">
                        <div className="text-center py-6">
                          <div className="text-2xl font-bold mb-2">Apple Pay</div>
                          <p className="text-muted-foreground mb-4">
                            Complete your payment with Apple Pay
                          </p>
                          <Button className="gap-2">
                            Pay with Apple Pay
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="google">
                        <div className="text-center py-6">
                          <div className="text-2xl font-bold mb-2">Google Pay</div>
                          <p className="text-muted-foreground mb-4">
                            Complete your payment with Google Pay
                          </p>
                          <Button className="gap-2">
                            Pay with Google Pay
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                
                {/* Cancellation policy */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cancellation Policy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Free cancellation until 48 hours before pickup</AlertTitle>
                      <AlertDescription>
                        Cancel before {rental.startDate} for a full refund. After that, you'll be charged 50% of the total booking amount.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Right column - Order summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">${rental.price} x {rental.days} days</span>
                      <span>${rental.price * rental.days}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Insurance</span>
                      <span>${rental.insurance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee</span>
                      <span>${rental.serviceFee}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold">
                      <span>Total</span>
                      <span>${rental.total}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button 
                      className="w-full"
                      size="lg"
                      onClick={handlePaymentSubmit}
                    >
                      Complete Payment
                    </Button>
                    
                    <div className="flex items-center gap-2 text-sm text-center text-muted-foreground">
                      <Shield className="h-4 w-4 flex-shrink-0" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </CardFooter>
                </Card>
                
                <div className="mt-6">
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      You must present a valid driver's license and credit card at vehicle pickup.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
