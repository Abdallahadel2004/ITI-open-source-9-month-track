#include <iostream>
using namespace std;

class Date {
private:
int day;
int month;
int year;

public:

    void setDay(int d) {
        if (d >= 1 && d <= 31)
            day = d ;
        else
            cout << "Invalid day ";
    }

    void setMonth(int m) {
        if (m >= 1 && m <= 12)
            month = m ;
        else
            cout << "Invalid month ";
    }

    void setYear(int y) {
        if (y >= 0)
            year = y;
        else
            cout << "Invalid year ";
    }

     int getDay()   {
         return day;
         }
     int getMonth() {
         return month;
         }
     int getYear()  {
         return year;
         }

     void displayDate() {
        cout << (day < 10 ? "0" : "") << day << "/"
             << (month < 10 ? "0" : "") << month << "/"
             << year;
      }

     Date sumDates(Date d2) {
        Date r;
        int d = day + d2.day;
        int m = month + d2.month;
        int y = year + d2.year;

        r.day = d;
        r.month = m;
        r.year = y;
        return r;
    }

Date diffDates(Date d2) {
Date r;
int d1 = day,  m1 = month,  y1 = year;
int d2d = d2.day, m2 = d2.month, y2 = d2.year;

    if (y2 > y1 || (y2 == y1 && m2 > m1) || (y2 == y1 && m2 == m1 && d2d > d1)) {
        swap(d1, d2d);
        swap(m1, m2);
        swap(y1, y2);
    }

int d = d1 - d2d;
int m = m1 - m2;
int y = y1 - y2;

    if (d < 0) {
        d += 30; m--;
    }

    if (m < 0) {
         m += 12; y--;
    }

r.day = d;
r.month = m;
r.year = y;

return r;
}

};

int main() {
Date d1, d2;
    d1.setDay(1); d1.setMonth(1); d1.setYear(2004);
    d2.setDay(10); d2.setMonth(10); d2.setYear(2030);

    cout << "date 1: "; d1.displayDate(); cout << endl;
    cout << "date 2: "; d2.displayDate(); cout << endl;

    Date s = d1.sumDates(d2);
    cout << "Sum: "; s.displayDate(); cout << endl;

    Date diff = d1.diffDates(d2);
    cout << "diff : "; diff.displayDate(); cout << endl;

    return 0;
}
