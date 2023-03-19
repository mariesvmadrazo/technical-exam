<template>
  <div id="announcement-list" class="py-12 px-20 flex flex-col text-duskGray">
    <div class="flex justify-between items-center">
      <div class="flex flex-col items-start">
        <div class="text-2xl text-bold">Announcements</div>
        <div class="text-xl">
          View, create, or edit announcement for all employees of your company.
        </div>
      </div>
      <div class="h-8 p-2 rounded-md bg-green text-white cursor-pointer text-bold flex items-center">
        <font-awesome-icon icon="fa-plus" class="mr-2"></font-awesome-icon> Post an announcement
      </div>
    </div>
    <div id="filters" class="flex justify-between items-center">
      <div class="flex">
        <div class="flex justify-center items-center rounded-lg h-8 py-1 px-2 bg-lightGreen text-sm mr-2 cursor-pointer text-bold">
          <span class="rounded-lg px-1.5 mr-2 bg-green text-white">10</span>
          <span class="text-green">All</span>
        </div>
        <div class="flex justify-center items-center rounded h-8 py-1 px-2 text-sm cursor-pointer text-bold">
          <span class="rounded-lg px-1.5 mr-2 bg-orange text-white">10</span>
          <span>Drafts</span>
        </div>
      </div>
      <div class="flex">
        <div class="rounded w-80 h-8 mr-6 outline-none border-solid border-2 border-lightGray">
          <select class="rounded w-full h-full outline-none">
            <option value="1">Filter by</option>
          </select>
        </div>
        <div class="flex justify-center items-center rounded w-80 h-8 border-solid border-2 border-lightGray">
          <input class="w-10/12 outline-none" placeholder="Search..." />
          <font-awesome-icon icon="fa-search" class="text-lightGray"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div id="list-wrapper" class="flex flex-col rounded border-solid border-2 border-lightGray overflow-auto">
      <div id="table">
        <div id="table-header" class=" h-16">
          <div class="h-full flex border-solid border-b-2 border-lightGray">
            <div class="w-56 pt-4 text-left pl-4 text-bold" v-for="(header, i) in announcementsHeader" :key="`announcementlist-header-${i+1}`" :class="header === 'Sent Through' ? 'flex' : ''">{{ header.toUpperCase() }}<div class="flex justify-center items-center bg-blue rounded-full text-white ml-2 h-5 w-5 text-xs" v-if="header === 'Sent Through'"><font-awesome-icon icon="fa-info"></font-awesome-icon></div></div>
          </div>
        </div>
        <div id="table-body">
          <div v-for="(announcement, i) in announcements" :key="`announcement-${i+1}`" class="flex border-solid border-b-2 border-lightGray items-center">
            <div class="w-56 py-1 text-left pl-4 whitespace-nowrap overflow-hidden text-ellipsis"><span>{{ announcement.title }}</span></div>
            <div class="w-56 py-1 text-left pl-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ announcement.message }}</div>
            <div class="w-56 py-1 text-left pl-4">{{ announcement.sentBy }}</div>
            <div class="w-56 py-1 text-left pl-4">
              <font-awesome-icon class="mr-2" v-for="(thru, i) in announcement.sentThrough" :key="`sent-through-${i+1}`" :icon="thru === 'mobile' ? `fa-${thru}-alt` : `fa-${thru}`"></font-awesome-icon>
            </div>
            <div class="w-56 py-1 text-left pl-4">{{ announcement.dateCreated }}</div>
            <div class="w-56 py-1 text-left pl-4">
              <div>
                <div>{{ announcement.startDate }}</div>
                <div class="time text-gray">{{ announcement.startTime }}</div>
              </div>
            </div>
            <div class="w-56 py-1 text-left pl-4">
              <div>
                <div>{{ announcement.dateCreated }}</div>
                <div class="time text-gray">{{ announcement.endTime }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="list-footer" class="w-full h-full flex px-4 py-3 items-center justify-between">
        <div class="flex w-1/5 items-center">
          <div>Items per page</div>
          <div class="rounded w-18 h-8 ml-2 outline-none border-solid border-2 border-lightGray">
            <select class="rounded outline-none">
              <option value="1">10</option>
            </select>
          </div>
        </div>
        <div class="flex w-1/6 justify-between items-center">
          <font-awesome-icon icon="step-backward" class="cursor-pointer"></font-awesome-icon>
          <font-awesome-icon icon="caret-left" class="cursor-pointer"></font-awesome-icon>
          <div class="flex items-center">Page <div class="rounded mx-2 px-2 border-solid border-2 border-lightGray">1</div> of 1</div>
          <font-awesome-icon icon="caret-right" class="cursor-pointer"></font-awesome-icon>
          <font-awesome-icon icon="step-forward" class="cursor-pointer"></font-awesome-icon>
        </div>
        <div class="flex w-1/5 justify-end">
          Showing 1 - 10 of 1
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        announcementsHeader: [
          "Title",
          "Message",
          "Sent By",
          "Sent Through",
          "Date Created",
          "Start Date",
          "End Date"
        ],
        announcements: [
          {
            title: '[FOR YOUR ACTIONS] asdadasdadasdasdasdd',
            message: 'In line with the incerement',
            sentBy: 'Roe, Ken',
            sentThrough: ['bookmark'],
            dateCreated: '02/17/2022',
            startDate: '02/18/2022',
            startTime: '9:30 AM',
            endDate: '02/22/2022',
            endTime: '7:30 PM'
          },
          {
            title: 'Annual Physical Examination asdsadasd',
            message: 'In compliance with the incerement',
            sentBy: 'Roe, Ken',
            sentThrough: ['bookmark', 'mobile'],
            dateCreated: '08/30/2020',
            startDate: '09/01/2020',
            startTime: '9:00 AM',
            endDate: '09/30/2020',
            endTime: '6:00 PM'
          },
          {
            title: 'Mid-Autumn Festival asdasdadad',
            message: 'We wish everyone a happy birthday',
            sentBy: 'Doe, Jane',
            sentThrough: ['bookmark', 'mobile'],
            dateCreated: '08/22/2020',
            startDate: '08/23/2020',
            startTime: '12:00 PM',
            endDate: '08/25/2020',
            endTime: '9:00 AM'
          },
          {
            title: '50th General Assembly yasdasdasdads',
            message: 'Expelliarmus! Check up',
            sentBy: 'Doe, John',
            sentThrough: ['bookmark', 'mobile'],
            dateCreated: '08/15/2020',
            startDate: '08/19/2020',
            startTime: '9:00 PM',
            endDate: '08/25/2020',
            endTime: '6:00 AM'
          },
          {
            title: 'New Employees',
            message: 'Let us all welcome',
            sentBy: 'King, Chow',
            sentThrough: ['bookmark'],
            dateCreated: '08/10/2020',
            startDate: '08/15/2020',
            startTime: '8:30 PM',
            endDate: '08/18/2020',
            endTime: '6:00 PM'
          },
          {
            title: 'Stocks as of Aug. 09 19990909',
            message: 'Our investors have aligned the',
            sentBy: 'King, Chow',
            sentThrough: ['bookmark'],
            dateCreated: '07/30/2020',
            startDate: '08/01/2020',
            startTime: '8:30 AM',
            endDate: '08/04/2020',
            endTime: '6:00 PM'
          },
          {
            title: 'Tip of the Week',
            message: 'To stay hydrated, drink water',
            sentBy: 'Roe, Ken',
            sentThrough: ['bookmark'],
            dateCreated: '02/26/2020',
            startDate: '02/27/2020',
            startTime: '9:00 AM',
            endDate: '03/15/2020',
            endTime: '6:00 PM'
          },
          {
            title: 'Employees of the Month June to July',
            message: 'Congratulations to you',
            sentBy: 'King, Chow',
            sentThrough: ['mobile'],
            dateCreated: '01/12/2020',
            startDate: '01/13/2020',
            startTime: '9:00 AM',
            endDate: '01/14/2020',
            endTime: '6:00 PM'
          },
          {
            title: 'Breakfast Menu',
            message: 'We will be introducing the breakfast',
            sentBy: 'Gus, Amon',
            sentThrough: ['mobile'],
            dateCreated: '12/15/2019',
            startDate: '12/20/2019',
            startTime: '9:00 AM',
            endDate: '12/20/2019',
            endTime: '6:00 PM'
          },
          {
            title: 'Cafe Relocation',
            message: 'With the ongoing relocation',
            sentBy: 'Lavjsta, Asta',
            sentThrough: ['bookmark', 'mobile'],
            dateCreated: '02/14/2019',
            startDate: '02/15/2019',
            startTime: '9:00 AM',
            endDate: '02/19/2020',
            endTime: '6:00 PM'
          },
        ]
      }
    }
  }
</script>
  
<style scoped>
#announcement-list {
  height: calc(100% - 80px);
}
#filters {
  height: 60px
}
#list-wrapper {
  height: calc(100% - 120px);
}
.time {
  font-size: 0.825rem;
}
</style>