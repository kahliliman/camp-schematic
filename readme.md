RESTFUL ROUTES

name url verb desc
'----------------------------------------'
INDEX /campgrounds GET Display a list of all campgrounds
NEW /campgrounds/new GET display form to make a campground
CREATE /campgrounds POST add new campground to db
SHOW /campgrounds/:id GET show info about one campground

SEED DATA

{"name" : "Salmon Creek", "image" : "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}
{"name" : "Mountain", "image" : "https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg"}
{"name" : "Granite Hill", "image" : "https://media.istockphoto.com/photos/army-camp-picture-id468698534?k=6&m=468698534&s=612x612&w=0&h=8XPmv_PzFCIM6K40WQ_KFnCUN4ZejnIW0Hlnh4wdLKI="}
{"name" : "Chevilly", "image" : "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20027192-da85465f44000dd46e538703cd392fef.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"}
{"name" : "Jogja ", "image" : "https://cdn2.tstatic.net/jogja/foto/bank/images/ngcamp-di-pantai-sedahan.jpg"}
