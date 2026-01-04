#include <iostream>
#include <vector>
#include <string>
using namespace std;


class Evaluatable {
public:
    virtual void Evaluate() = 0;
    virtual ~Evaluatable() {}
};


class Sharable {
public:
    virtual void Share() {
        cout << "Sharing material" << endl;
    }
};


class DigitalContent {
protected:
    string uploadDate;
public:
    DigitalContent(string date) : uploadDate(date) {}
};


class LearningMaterial : public virtual DigitalContent {
protected:
    string title;
    double duration;

public:
    LearningMaterial(const string& t, double d, const string& date)
        : DigitalContent(date), title(t), duration(d) {}

    virtual void DisplayInfo() const {
        cout << "Title: " << title
             << ", Duration: " << duration
             << " mins, Uploaded at: " << uploadDate << endl;
    }

    virtual ~LearningMaterial() {}
};


class VideoLesson : public LearningMaterial, public virtual Sharable {
private:
    string resolution;
public:
    VideoLesson(const string& t, double d, const string& res, const string& date)
        : DigitalContent(date), LearningMaterial(t, d, date), resolution(res) {}

    void DisplayInfo() const override {
        cout << "[Video] Title: " << title
             << ", Duration: " << duration
             << " mins, Resolution: " << resolution
             << ", Uploaded at: " << uploadDate << endl;
    }

    void Share() override {
        cout << "Sharing video lesson: " << title << endl;
    }
};

class Article : public LearningMaterial {
private:
    int numPages;
public:
    Article(const string& t, double d, int pages, const string& date)
        : DigitalContent(date), LearningMaterial(t, d, date), numPages(pages) {}

    void DisplayInfo() const override {
        cout << "[Article] Title: " << title
             << ", Duration: " << duration
             << " mins, Pages: " << numPages
             << ", Uploaded at: " << uploadDate << endl;
    }
};

class Quiz : public LearningMaterial, public Evaluatable {
private:
    int numQuestions;
public:
    Quiz(const string& t, double d, int questions, const string& date)
        : DigitalContent(date), LearningMaterial(t, d, date), numQuestions(questions) {}

    void DisplayInfo() const override {
        cout << "[Quiz] Title: " << title
             << ", Duration: " << duration
             << " mins, Questions: " << numQuestions
             << ", Uploaded at: " << uploadDate << endl;
    }

    void Evaluate() override {
        cout << "Evaluating quiz: " << title
             << " (questions: " << numQuestions << ")" << endl;
    }
};

class Course {
private:
    vector<LearningMaterial*> materials;
public:
    void AddMaterial(LearningMaterial* m) {
        materials.push_back(m);
    }

    void ShowCourseContent() const {
        cout << "Course Content:" << endl;
        for (const auto& m : materials) {
            m->DisplayInfo();
        }
    }

    ~Course() {
        for (auto m : materials) {
            delete m;
        }
    }
};

int main() {
    vector<LearningMaterial*> materials;

    VideoLesson* v = new VideoLesson("C++ ", 30, "360p", "2025-11-20");
    Article* a = new Article("OOP in ITI", 15, 10, "2025-11-19");
    Quiz* q = new Quiz("C++ Quiz 1", 20, 5, "2026-11-18");

    materials.push_back(v);
    materials.push_back(a);
    materials.push_back(q);

    for (auto m : materials) {
        m->DisplayInfo();
    }

    vector<Evaluatable*> evaluatables;
    evaluatables.push_back(q);

    for (auto e : evaluatables) {
        e->Evaluate();
    }

    Sharable* s = new VideoLesson("Advanced C++", 40, "720p", "2025-11-20");
    s->Share();
    delete s;

    Course course;
    course.AddMaterial(new VideoLesson("Data structure", 25, "480p", "2025-11-17"));
    course.AddMaterial(new Article("Data Structure", 20, 8, "2025-11-16"));
    course.AddMaterial(new Quiz("Data Structure  Quiz", 15, 7, "2025-11-15"));
    course.ShowCourseContent();

//    for (auto m : materials) {
//        delete m;
//    }
    return 0;
}
