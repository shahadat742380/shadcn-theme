
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Weather() {
  return (
    <section className="container px-4 py-12 mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col gap-4">
          <CardHeader>
            <CardTitle>Current Weather</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <SunIcon className="h-16 w-16 text-yellow-500" />
            <div className="text-center">
              <h2 className="text-4xl font-bold">75°F</h2>
              <p className="text-gray-500">Sunny</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-4">
          <CardHeader>
            <CardTitle>Hourly Forecast</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500">Now</p>
              <SunIcon className="h-8 w-8 text-yellow-500" />
              <p className="text-lg font-semibold">75°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500">1PM</p>
              <SunIcon className="h-8 w-8 text-yellow-500" />
              <p className="text-lg font-semibold">77°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500">2PM</p>
              <SunIcon className="h-8 w-8 text-yellow-500" />
              <p className="text-lg font-semibold">79°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500">3PM</p>
              <SunIcon className="h-8 w-8 text-yellow-500" />
              <p className="text-lg font-semibold">80°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500">4PM</p>
              <SunIcon className="h-8 w-8 text-yellow-500" />
              <p className="text-lg font-semibold">81°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500">5PM</p>
              <SunIcon className="h-8 w-8 text-yellow-500" />
              <p className="text-lg font-semibold">80°F</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-4">
          <CardHeader>
            <CardTitle>Weekly Forecast</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Mon</p>
                <SunIcon className="h-4 w-4 text-yellow-500" />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">78°F</p>
                <p className="text-sm text-gray-500">/</p>
                <p className="text-sm">62°F</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Tue</p>
                <CloudSunIcon className="h-4 w-4 text-yellow-500" />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">75°F</p>
                <p className="text-sm text-gray-500">/</p>
                <p className="text-sm">60°F</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Wed</p>
                <CloudRainIcon className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">70°F</p>
                <p className="text-sm text-gray-500">/</p>
                <p className="text-sm">58°F</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Thu</p>
                <CloudIcon className="h-4 w-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">68°F</p>
                <p className="text-sm text-gray-500">/</p>
                <p className="text-sm">55°F</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Fri</p>
                <SunIcon className="h-4 w-4 text-yellow-500" />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">72°F</p>
                <p className="text-sm text-gray-500">/</p>
                <p className="text-sm">60°F</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CloudRainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  )
}


function CloudSunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  )
}


function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
