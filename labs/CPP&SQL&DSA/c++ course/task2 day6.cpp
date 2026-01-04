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
            day = d;
        else
            cout << " Invalid day ";
    }
    void setMonth(int m) {
        if (m >= 1 && m <= 12)
            month = m;
        else
            cout << " Invalid month ";
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

        if (d > 30) {
            m += d / 30;
            d = d % 30;
            if (d == 0) { d = 30; m--; }
        }
        if (m > 12) {
            y += m / 12;
            m = m % 12;
            if (m == 0) { m = 12; y--; }
        }

        r.day = d;
        r.month = m;
        r.year = y;
        return r;
    }

    Date diffDates(Date d2) {
        Date r;

        int d1 = day,  m1 = month,  y1 = year;
        int d2d = d2.day, m2 = d2.month, y2 = d2.year;

        long long v1 = y1 * 360 + m1 * 30 + d1;
        long long v2 = y2 * 360 + m2 * 30 + d2d;

        if (v2 > v1) {
            std::swap(d1, d2d);
            std::swap(m1, m2);
            std::swap(y1, y2);
        }

        int d = d1 - d2d;
        int m = m1 - m2;
        int y = y1 - y2;

        if (d < 0) { d += 30; m--; }
        if (m < 0) { m += 12; y--; }

        r.day = d;
        r.month = m;
        r.year = y;
        return r;
    }
};

int main() {
    Date d1, d2;
    d1.setDay(15); d1.setMonth(11); d1.setYear(2025);
    d2.setDay(10); d2.setMonth(10); d2.setYear(2020);

    cout << "Date 1: "; d1.displayDate(); cout << endl;
    cout << "Date 2: "; d2.displayDate(); cout << endl;

    Date s = d1.sumDates(d2);
    cout << "Sum: "; s.displayDate(); cout << endl;

    Date diff = d1.diffDates(d2);
    cout << "Diff: "; diff.displayDate(); cout << endl;

    return 0;
}
