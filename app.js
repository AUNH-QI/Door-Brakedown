// ดึงข้อมูลจากไฟล์ data.json
fetch('data.json')
  .then(response => response.json())
  .then(rawData => {
    // ข้อมูล 850 รายการจะถูกโหลดมาไว้ในตัวแปร rawData ตรงนี้
    console.log(rawData); 
    
    // เรียกฟังก์ชั่นแสดงผล Dashboard ของคุณตรงนี้
    renderDashboard(rawData);
  })
  .catch(error => console.error('Error loading data:', error));

function renderDashboard(data) {
  // เขียนโค้ดแสดงผลกราฟหรือตารางตรงนี้
}
