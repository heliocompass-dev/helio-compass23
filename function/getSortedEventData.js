export function getSortedEventData(eventData) {

    console.log(eventData);

    const today = new Date();
    const sortedEventData = eventData.contents.filter((event) => {
        const eventDate = new Date(event.eventData);
        return today <= eventDate;
      }).sort((a, b) => {
        const dateA = new Date(a.eventData);
        const dateB = new Date(b.eventData);
        return dateA - dateB;
      });
  
    return sortedEventData;
  }