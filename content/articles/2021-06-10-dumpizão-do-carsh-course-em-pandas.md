---
title: Dumpizão do Carsh Course em Pandas
date: 2021-06-10T01:38:53.040Z
description: dumpizão da massa
---
### Aula 1 - Introdução da massa


```python
import pandas as pd
```


```python
df = pd.read_csv('./survey_results_public.csv')
```

as primeiras 5 linhas


```python
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Respondent</th>
      <th>MainBranch</th>
      <th>Hobbyist</th>
      <th>OpenSourcer</th>
      <th>OpenSource</th>
      <th>Employment</th>
      <th>Country</th>
      <th>Student</th>
      <th>EdLevel</th>
      <th>UndergradMajor</th>
      <th>...</th>
      <th>WelcomeChange</th>
      <th>SONewContent</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Trans</th>
      <th>Sexuality</th>
      <th>Ethnicity</th>
      <th>Dependents</th>
      <th>SurveyLength</th>
      <th>SurveyEase</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>I am a student who is learning to code</td>
      <td>Yes</td>
      <td>Never</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>Not employed, and not looking for work</td>
      <td>United Kingdom</td>
      <td>No</td>
      <td>Primary/elementary school</td>
      <td>NaN</td>
      <td>...</td>
      <td>Just as welcome now as I felt last year</td>
      <td>Tech articles written by other developers;Indu...</td>
      <td>14.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>NaN</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Neither easy nor difficult</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>I am a student who is learning to code</td>
      <td>No</td>
      <td>Less than once per year</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>Not employed, but looking for work</td>
      <td>Bosnia and Herzegovina</td>
      <td>Yes, full-time</td>
      <td>Secondary school (e.g. American high school, G...</td>
      <td>NaN</td>
      <td>...</td>
      <td>Just as welcome now as I felt last year</td>
      <td>Tech articles written by other developers;Indu...</td>
      <td>19.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>NaN</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Neither easy nor difficult</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>I am not primarily a developer, but I write co...</td>
      <td>Yes</td>
      <td>Never</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>Employed full-time</td>
      <td>Thailand</td>
      <td>No</td>
      <td>Bachelor’s degree (BA, BS, B.Eng., etc.)</td>
      <td>Web development or web design</td>
      <td>...</td>
      <td>Just as welcome now as I felt last year</td>
      <td>Tech meetups or events in your area;Courses on...</td>
      <td>28.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>NaN</td>
      <td>Yes</td>
      <td>Appropriate in length</td>
      <td>Neither easy nor difficult</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>I am a developer by profession</td>
      <td>No</td>
      <td>Never</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>Employed full-time</td>
      <td>United States</td>
      <td>No</td>
      <td>Bachelor’s degree (BA, BS, B.Eng., etc.)</td>
      <td>Computer science, computer engineering, or sof...</td>
      <td>...</td>
      <td>Just as welcome now as I felt last year</td>
      <td>Tech articles written by other developers;Indu...</td>
      <td>22.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>White or of European descent</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Easy</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>I am a developer by profession</td>
      <td>Yes</td>
      <td>Once a month or more often</td>
      <td>OSS is, on average, of HIGHER quality than pro...</td>
      <td>Employed full-time</td>
      <td>Ukraine</td>
      <td>No</td>
      <td>Bachelor’s degree (BA, BS, B.Eng., etc.)</td>
      <td>Computer science, computer engineering, or sof...</td>
      <td>...</td>
      <td>Just as welcome now as I felt last year</td>
      <td>Tech meetups or events in your area;Courses on...</td>
      <td>30.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>White or of European descent;Multiracial</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Easy</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 85 columns</p>
</div>



últimas 5 linhas


```python
df.tail()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Respondent</th>
      <th>MainBranch</th>
      <th>Hobbyist</th>
      <th>OpenSourcer</th>
      <th>OpenSource</th>
      <th>Employment</th>
      <th>Country</th>
      <th>Student</th>
      <th>EdLevel</th>
      <th>UndergradMajor</th>
      <th>EduOther</th>
      <th>OrgSize</th>
      <th>DevType</th>
      <th>YearsCode</th>
      <th>Age1stCode</th>
      <th>YearsCodePro</th>
      <th>CareerSat</th>
      <th>JobSat</th>
      <th>MgrIdiot</th>
      <th>MgrMoney</th>
      <th>MgrWant</th>
      <th>JobSeek</th>
      <th>LastHireDate</th>
      <th>LastInt</th>
      <th>FizzBuzz</th>
      <th>JobFactors</th>
      <th>ResumeUpdate</th>
      <th>CurrencySymbol</th>
      <th>CurrencyDesc</th>
      <th>CompTotal</th>
      <th>CompFreq</th>
      <th>ConvertedComp</th>
      <th>WorkWeekHrs</th>
      <th>WorkPlan</th>
      <th>WorkChallenge</th>
      <th>WorkRemote</th>
      <th>WorkLoc</th>
      <th>ImpSyn</th>
      <th>CodeRev</th>
      <th>CodeRevHrs</th>
      <th>UnitTests</th>
      <th>PurchaseHow</th>
      <th>PurchaseWhat</th>
      <th>LanguageWorkedWith</th>
      <th>LanguageDesireNextYear</th>
      <th>DatabaseWorkedWith</th>
      <th>DatabaseDesireNextYear</th>
      <th>PlatformWorkedWith</th>
      <th>PlatformDesireNextYear</th>
      <th>WebFrameWorkedWith</th>
      <th>WebFrameDesireNextYear</th>
      <th>MiscTechWorkedWith</th>
      <th>MiscTechDesireNextYear</th>
      <th>DevEnviron</th>
      <th>OpSys</th>
      <th>Containers</th>
      <th>BlockchainOrg</th>
      <th>BlockchainIs</th>
      <th>BetterLife</th>
      <th>ITperson</th>
      <th>OffOn</th>
      <th>SocialMedia</th>
      <th>Extraversion</th>
      <th>ScreenName</th>
      <th>SOVisit1st</th>
      <th>SOVisitFreq</th>
      <th>SOVisitTo</th>
      <th>SOFindAnswer</th>
      <th>SOTimeSaved</th>
      <th>SOHowMuchTime</th>
      <th>SOAccount</th>
      <th>SOPartFreq</th>
      <th>SOJobs</th>
      <th>EntTeams</th>
      <th>SOComm</th>
      <th>WelcomeChange</th>
      <th>SONewContent</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Trans</th>
      <th>Sexuality</th>
      <th>Ethnicity</th>
      <th>Dependents</th>
      <th>SurveyLength</th>
      <th>SurveyEase</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>88878</th>
      <td>88377</td>
      <td>NaN</td>
      <td>Yes</td>
      <td>Less than once a month but more than once per ...</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>Not employed, and not looking for work</td>
      <td>Canada</td>
      <td>No</td>
      <td>Primary/elementary school</td>
      <td>NaN</td>
      <td>Taught yourself a new language, framework, or ...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>HTML/CSS;JavaScript;Other(s):</td>
      <td>C++;HTML/CSS;JavaScript;SQL;WebAssembly;Other(s):</td>
      <td>Firebase;SQLite</td>
      <td>Firebase;MySQL;SQLite</td>
      <td>Linux</td>
      <td>Google Cloud Platform;Linux</td>
      <td>jQuery</td>
      <td>jQuery;Vue.js</td>
      <td>Node.js</td>
      <td>React Native;Unity 3D;Unreal Engine</td>
      <td>Atom;Visual Studio;Visual Studio Code</td>
      <td>Windows</td>
      <td>I do not use containers</td>
      <td>NaN</td>
      <td>Useful across many domains and could change ma...</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>What?</td>
      <td>YouTube</td>
      <td>NaN</td>
      <td>Username</td>
      <td>I don't remember</td>
      <td>A few times per week</td>
      <td>Find answers to specific questions;Learn how t...</td>
      <td>3-5 times per week</td>
      <td>Stack Overflow was slightly faster</td>
      <td>11-30 minutes</td>
      <td>Yes</td>
      <td>I have never participated in Q&amp;A on Stack Over...</td>
      <td>No, I knew that Stack Overflow had a job board...</td>
      <td>No, I've heard of them, but I am not part of a...</td>
      <td>No, not at all</td>
      <td>NaN</td>
      <td>Tech articles written by other developers;Tech...</td>
      <td>NaN</td>
      <td>Man</td>
      <td>No</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Easy</td>
    </tr>
    <tr>
      <th>88879</th>
      <td>88601</td>
      <td>NaN</td>
      <td>No</td>
      <td>Never</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>88880</th>
      <td>88802</td>
      <td>NaN</td>
      <td>No</td>
      <td>Never</td>
      <td>NaN</td>
      <td>Employed full-time</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>88881</th>
      <td>88816</td>
      <td>NaN</td>
      <td>No</td>
      <td>Never</td>
      <td>OSS is, on average, of HIGHER quality than pro...</td>
      <td>Independent contractor, freelancer, or self-em...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>88882</th>
      <td>88863</td>
      <td>NaN</td>
      <td>Yes</td>
      <td>Less than once per year</td>
      <td>OSS is, on average, of HIGHER quality than pro...</td>
      <td>Not employed, and not looking for work</td>
      <td>Spain</td>
      <td>Yes, full-time</td>
      <td>Professional degree (JD, MD, etc.)</td>
      <td>Computer science, computer engineering, or sof...</td>
      <td>Taken an online course in programming or softw...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>8</td>
      <td>11</td>
      <td>3</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Bash/Shell/PowerShell;HTML/CSS;Java;JavaScript...</td>
      <td>C;C++;C#;HTML/CSS;Java;Objective-C;SQL;Swift</td>
      <td>DynamoDB;MariaDB;Microsoft SQL Server;MySQL</td>
      <td>MariaDB;MySQL;Oracle;SQLite</td>
      <td>iOS;Linux;MacOS;WordPress</td>
      <td>Android;AWS;Google Cloud Platform;IBM Cloud or...</td>
      <td>Django;jQuery;React.js</td>
      <td>Django</td>
      <td>Unity 3D;Unreal Engine</td>
      <td>NaN</td>
      <td>Android Studio;Atom;Eclipse;NetBeans;Notepad++...</td>
      <td>Linux-based</td>
      <td>Production</td>
      <td>NaN</td>
      <td>Useful for decentralized currency (i.e., Bitcoin)</td>
      <td>Yes</td>
      <td>Also Yes</td>
      <td>Yes</td>
      <td>WhatsApp</td>
      <td>In real life (in person)</td>
      <td>NaN</td>
      <td>2012</td>
      <td>Daily or almost daily</td>
      <td>Find answers to specific questions;Learn how t...</td>
      <td>6-10 times per week</td>
      <td>Stack Overflow was much faster</td>
      <td>11-30 minutes</td>
      <td>Yes</td>
      <td>A few times per month or weekly</td>
      <td>Yes</td>
      <td>No, I've heard of them, but I am not part of a...</td>
      <td>Yes, somewhat</td>
      <td>Somewhat less welcome now than last year</td>
      <td>Tech articles written by other developers;Indu...</td>
      <td>18.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>Hispanic or Latino/Latina;White or of European...</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Easy</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.shape
```




    (88883, 85)




```python
schema_df = pd.read_csv('./survey_results_schema.csv')
```

setando o tamanho do print do dataframe


```python
pd.set_option('display.max_columns',85)
pd.set_option('display.max_rows',85)
```


```python
schema_df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Column</th>
      <th>QuestionText</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Respondent</td>
      <td>Randomized respondent ID number (not in order ...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>MainBranch</td>
      <td>Which of the following options best describes ...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Hobbyist</td>
      <td>Do you code as a hobby?</td>
    </tr>
    <tr>
      <th>3</th>
      <td>OpenSourcer</td>
      <td>How often do you contribute to open source?</td>
    </tr>
    <tr>
      <th>4</th>
      <td>OpenSource</td>
      <td>How do you feel about the quality of open sour...</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Employment</td>
      <td>Which of the following best describes your cur...</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Country</td>
      <td>In which country do you currently reside?</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Student</td>
      <td>Are you currently enrolled in a formal, degree...</td>
    </tr>
    <tr>
      <th>8</th>
      <td>EdLevel</td>
      <td>Which of the following best describes the high...</td>
    </tr>
    <tr>
      <th>9</th>
      <td>UndergradMajor</td>
      <td>What was your main or most important field of ...</td>
    </tr>
    <tr>
      <th>10</th>
      <td>EduOther</td>
      <td>Which of the following types of non-degree edu...</td>
    </tr>
    <tr>
      <th>11</th>
      <td>OrgSize</td>
      <td>Approximately how many people are employed by ...</td>
    </tr>
    <tr>
      <th>12</th>
      <td>DevType</td>
      <td>Which of the following describe you? Please se...</td>
    </tr>
    <tr>
      <th>13</th>
      <td>YearsCode</td>
      <td>Including any education, how many years have y...</td>
    </tr>
    <tr>
      <th>14</th>
      <td>Age1stCode</td>
      <td>At what age did you write your first line of c...</td>
    </tr>
    <tr>
      <th>15</th>
      <td>YearsCodePro</td>
      <td>How many years have you coded professionally (...</td>
    </tr>
    <tr>
      <th>16</th>
      <td>CareerSat</td>
      <td>Overall, how satisfied are you with your caree...</td>
    </tr>
    <tr>
      <th>17</th>
      <td>JobSat</td>
      <td>How satisfied are you with your current job? (...</td>
    </tr>
    <tr>
      <th>18</th>
      <td>MgrIdiot</td>
      <td>How confident are you that your manager knows ...</td>
    </tr>
    <tr>
      <th>19</th>
      <td>MgrMoney</td>
      <td>Do you believe that you need to be a manager t...</td>
    </tr>
    <tr>
      <th>20</th>
      <td>MgrWant</td>
      <td>Do you want to become a manager yourself in th...</td>
    </tr>
    <tr>
      <th>21</th>
      <td>JobSeek</td>
      <td>Which of the following best describes your cur...</td>
    </tr>
    <tr>
      <th>22</th>
      <td>LastHireDate</td>
      <td>When was the last time that you took a job wit...</td>
    </tr>
    <tr>
      <th>23</th>
      <td>LastInt</td>
      <td>In your most recent successful job interview (...</td>
    </tr>
    <tr>
      <th>24</th>
      <td>FizzBuzz</td>
      <td>Have you ever been asked to solve FizzBuzz in ...</td>
    </tr>
    <tr>
      <th>25</th>
      <td>JobFactors</td>
      <td>Imagine that you are deciding between two job ...</td>
    </tr>
    <tr>
      <th>26</th>
      <td>ResumeUpdate</td>
      <td>Think back to the last time you updated your r...</td>
    </tr>
    <tr>
      <th>27</th>
      <td>CurrencySymbol</td>
      <td>Which currency do you use day-to-day? If your ...</td>
    </tr>
    <tr>
      <th>28</th>
      <td>CurrencyDesc</td>
      <td>Which currency do you use day-to-day? If your ...</td>
    </tr>
    <tr>
      <th>29</th>
      <td>CompTotal</td>
      <td>What is your current total compensation (salar...</td>
    </tr>
    <tr>
      <th>30</th>
      <td>CompFreq</td>
      <td>Is that compensation weekly, monthly, or yearly?</td>
    </tr>
    <tr>
      <th>31</th>
      <td>ConvertedComp</td>
      <td>Salary converted to annual USD salaries using ...</td>
    </tr>
    <tr>
      <th>32</th>
      <td>WorkWeekHrs</td>
      <td>On average, how many hours per week do you work?</td>
    </tr>
    <tr>
      <th>33</th>
      <td>WorkPlan</td>
      <td>How structured or planned is your work?</td>
    </tr>
    <tr>
      <th>34</th>
      <td>WorkChallenge</td>
      <td>Of these options, what are your greatest chall...</td>
    </tr>
    <tr>
      <th>35</th>
      <td>WorkRemote</td>
      <td>How often do you work remotely?</td>
    </tr>
    <tr>
      <th>36</th>
      <td>WorkLoc</td>
      <td>Where would you prefer to work?</td>
    </tr>
    <tr>
      <th>37</th>
      <td>ImpSyn</td>
      <td>For the specific work you do, and the years of...</td>
    </tr>
    <tr>
      <th>38</th>
      <td>CodeRev</td>
      <td>Do you review code as part of your work?</td>
    </tr>
    <tr>
      <th>39</th>
      <td>CodeRevHrs</td>
      <td>On average, how many hours per week do you spe...</td>
    </tr>
    <tr>
      <th>40</th>
      <td>UnitTests</td>
      <td>Does your company regularly employ unit tests ...</td>
    </tr>
    <tr>
      <th>41</th>
      <td>PurchaseHow</td>
      <td>How does your company make decisions about pur...</td>
    </tr>
    <tr>
      <th>42</th>
      <td>PurchaseWhat</td>
      <td>What level of influence do you, personally, ha...</td>
    </tr>
    <tr>
      <th>43</th>
      <td>LanguageWorkedWith</td>
      <td>Which of the following programming, scripting,...</td>
    </tr>
    <tr>
      <th>44</th>
      <td>LanguageDesireNextYear</td>
      <td>Which of the following programming, scripting,...</td>
    </tr>
    <tr>
      <th>45</th>
      <td>DatabaseWorkedWith</td>
      <td>Which of the following database environments h...</td>
    </tr>
    <tr>
      <th>46</th>
      <td>DatabaseDesireNextYear</td>
      <td>Which of the following database environments h...</td>
    </tr>
    <tr>
      <th>47</th>
      <td>PlatformWorkedWith</td>
      <td>Which of the following platforms have you done...</td>
    </tr>
    <tr>
      <th>48</th>
      <td>PlatformDesireNextYear</td>
      <td>Which of the following platforms have you done...</td>
    </tr>
    <tr>
      <th>49</th>
      <td>WebFrameWorkedWith</td>
      <td>Which of the following web frameworks have you...</td>
    </tr>
    <tr>
      <th>50</th>
      <td>WebFrameDesireNextYear</td>
      <td>Which of the following web frameworks have you...</td>
    </tr>
    <tr>
      <th>51</th>
      <td>MiscTechWorkedWith</td>
      <td>Which of the following other frameworks, libra...</td>
    </tr>
    <tr>
      <th>52</th>
      <td>MiscTechDesireNextYear</td>
      <td>Which of the following other frameworks, libra...</td>
    </tr>
    <tr>
      <th>53</th>
      <td>DevEnviron</td>
      <td>Which development environment(s) do you use re...</td>
    </tr>
    <tr>
      <th>54</th>
      <td>OpSys</td>
      <td>What is the primary operating system in which ...</td>
    </tr>
    <tr>
      <th>55</th>
      <td>Containers</td>
      <td>How do you use containers (Docker, Open Contai...</td>
    </tr>
    <tr>
      <th>56</th>
      <td>BlockchainOrg</td>
      <td>How is your organization thinking about or imp...</td>
    </tr>
    <tr>
      <th>57</th>
      <td>BlockchainIs</td>
      <td>Blockchain / cryptocurrency technology is prim...</td>
    </tr>
    <tr>
      <th>58</th>
      <td>BetterLife</td>
      <td>Do you think people born today will have a bet...</td>
    </tr>
    <tr>
      <th>59</th>
      <td>ITperson</td>
      <td>Are you the "IT support person" for your family?</td>
    </tr>
    <tr>
      <th>60</th>
      <td>OffOn</td>
      <td>Have you tried turning it off and on again?</td>
    </tr>
    <tr>
      <th>61</th>
      <td>SocialMedia</td>
      <td>What social media site do you use the most?</td>
    </tr>
    <tr>
      <th>62</th>
      <td>Extraversion</td>
      <td>Do you prefer online chat or IRL conversations?</td>
    </tr>
    <tr>
      <th>63</th>
      <td>ScreenName</td>
      <td>What do you call it?</td>
    </tr>
    <tr>
      <th>64</th>
      <td>SOVisit1st</td>
      <td>To the best of your memory, when did you first...</td>
    </tr>
    <tr>
      <th>65</th>
      <td>SOVisitFreq</td>
      <td>How frequently would you say you visit Stack O...</td>
    </tr>
    <tr>
      <th>66</th>
      <td>SOVisitTo</td>
      <td>I visit Stack Overflow to... (check all that a...</td>
    </tr>
    <tr>
      <th>67</th>
      <td>SOFindAnswer</td>
      <td>On average, how many times a week do you find ...</td>
    </tr>
    <tr>
      <th>68</th>
      <td>SOTimeSaved</td>
      <td>Think back to the last time you solved a codin...</td>
    </tr>
    <tr>
      <th>69</th>
      <td>SOHowMuchTime</td>
      <td>About how much time did you save? If you're no...</td>
    </tr>
    <tr>
      <th>70</th>
      <td>SOAccount</td>
      <td>Do you have a Stack Overflow account?</td>
    </tr>
    <tr>
      <th>71</th>
      <td>SOPartFreq</td>
      <td>How frequently would you say you participate i...</td>
    </tr>
    <tr>
      <th>72</th>
      <td>SOJobs</td>
      <td>Have you ever used or visited Stack Overflow J...</td>
    </tr>
    <tr>
      <th>73</th>
      <td>EntTeams</td>
      <td>Have you ever used Stack Overflow for Enterpri...</td>
    </tr>
    <tr>
      <th>74</th>
      <td>SOComm</td>
      <td>Do you consider yourself a member of the Stack...</td>
    </tr>
    <tr>
      <th>75</th>
      <td>WelcomeChange</td>
      <td>Compared to last year, how welcome do you feel...</td>
    </tr>
    <tr>
      <th>76</th>
      <td>SONewContent</td>
      <td>Would you like to see any of the following on ...</td>
    </tr>
    <tr>
      <th>77</th>
      <td>Age</td>
      <td>What is your age (in years)? If you prefer not...</td>
    </tr>
    <tr>
      <th>78</th>
      <td>Gender</td>
      <td>Which of the following do you currently identi...</td>
    </tr>
    <tr>
      <th>79</th>
      <td>Trans</td>
      <td>Do you identify as transgender?</td>
    </tr>
    <tr>
      <th>80</th>
      <td>Sexuality</td>
      <td>Which of the following do you currently identi...</td>
    </tr>
    <tr>
      <th>81</th>
      <td>Ethnicity</td>
      <td>Which of the following do you identify as? Ple...</td>
    </tr>
    <tr>
      <th>82</th>
      <td>Dependents</td>
      <td>Do you have any dependents (e.g., children, el...</td>
    </tr>
    <tr>
      <th>83</th>
      <td>SurveyLength</td>
      <td>How do you feel about the length of the survey...</td>
    </tr>
    <tr>
      <th>84</th>
      <td>SurveyEase</td>
      <td>How easy or difficult was this survey to compl...</td>
    </tr>
  </tbody>
</table>
</div>



### Aula 2 - Básicao - selecionando linhas e colunas

retorna todas as colunas


```python
schema_df.columns
```




    Index(['Column', 'QuestionText'], dtype='object')



selecionando linhas com **iloc** e **loc**


```python
df.iloc[0]
```




    Respondent                                                                1
    MainBranch                           I am a student who is learning to code
    Hobbyist                                                                Yes
    OpenSourcer                                                           Never
    OpenSource                The quality of OSS and closed source software ...
    Employment                           Not employed, and not looking for work
    Country                                                      United Kingdom
    Student                                                                  No
    EdLevel                                           Primary/elementary school
    UndergradMajor                                                          NaN
    EduOther                  Taught yourself a new language, framework, or ...
    OrgSize                                                                 NaN
    DevType                                                                 NaN
    YearsCode                                                                 4
    Age1stCode                                                               10
    YearsCodePro                                                            NaN
    CareerSat                                                               NaN
    JobSat                                                                  NaN
    MgrIdiot                                                                NaN
    MgrMoney                                                                NaN
    MgrWant                                                                 NaN
    JobSeek                                                                 NaN
    LastHireDate                                                            NaN
    LastInt                                                                 NaN
    FizzBuzz                                                                NaN
    JobFactors                                                              NaN
    ResumeUpdate                                                            NaN
    CurrencySymbol                                                          NaN
    CurrencyDesc                                                            NaN
    CompTotal                                                               NaN
    CompFreq                                                                NaN
    ConvertedComp                                                           NaN
    WorkWeekHrs                                                             NaN
    WorkPlan                                                                NaN
    WorkChallenge                                                           NaN
    WorkRemote                                                              NaN
    WorkLoc                                                                 NaN
    ImpSyn                                                                  NaN
    CodeRev                                                                 NaN
    CodeRevHrs                                                              NaN
    UnitTests                                                               NaN
    PurchaseHow                                                             NaN
    PurchaseWhat                                                            NaN
    LanguageWorkedWith                          HTML/CSS;Java;JavaScript;Python
    LanguageDesireNextYear      C;C++;C#;Go;HTML/CSS;Java;JavaScript;Python;SQL
    DatabaseWorkedWith                                                   SQLite
    DatabaseDesireNextYear                                                MySQL
    PlatformWorkedWith                                            MacOS;Windows
    PlatformDesireNextYear                              Android;Arduino;Windows
    WebFrameWorkedWith                                             Django;Flask
    WebFrameDesireNextYear                                         Flask;jQuery
    MiscTechWorkedWith                                                  Node.js
    MiscTechDesireNextYear                                              Node.js
    DevEnviron                                       IntelliJ;Notepad++;PyCharm
    OpSys                                                               Windows
    Containers                                          I do not use containers
    BlockchainOrg                                                           NaN
    BlockchainIs                                                            NaN
    BetterLife                                                              Yes
    ITperson                           Fortunately, someone else has that title
    OffOn                                                                   Yes
    SocialMedia                                                         Twitter
    Extraversion                                                         Online
    ScreenName                                                         Username
    SOVisit1st                                                             2017
    SOVisitFreq                                 A few times per month or weekly
    SOVisitTo                 Find answers to specific questions;Learn how t...
    SOFindAnswer                                             3-5 times per week
    SOTimeSaved                                  Stack Overflow was much faster
    SOHowMuchTime                                                 31-60 minutes
    SOAccount                                                                No
    SOPartFreq                                                              NaN
    SOJobs                    No, I didn't know that Stack Overflow had a jo...
    EntTeams                                No, and I don't know what those are
    SOComm                                                              Neutral
    WelcomeChange                       Just as welcome now as I felt last year
    SONewContent              Tech articles written by other developers;Indu...
    Age                                                                    14.0
    Gender                                                                  Man
    Trans                                                                    No
    Sexuality                                           Straight / Heterosexual
    Ethnicity                                                               NaN
    Dependents                                                               No
    SurveyLength                                          Appropriate in length
    SurveyEase                                       Neither easy nor difficult
    Name: 0, dtype: object




```python
df.iloc[[0,1]]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Respondent</th>
      <th>MainBranch</th>
      <th>Hobbyist</th>
      <th>OpenSourcer</th>
      <th>OpenSource</th>
      <th>Employment</th>
      <th>Country</th>
      <th>Student</th>
      <th>EdLevel</th>
      <th>UndergradMajor</th>
      <th>EduOther</th>
      <th>OrgSize</th>
      <th>DevType</th>
      <th>YearsCode</th>
      <th>Age1stCode</th>
      <th>YearsCodePro</th>
      <th>CareerSat</th>
      <th>JobSat</th>
      <th>MgrIdiot</th>
      <th>MgrMoney</th>
      <th>MgrWant</th>
      <th>JobSeek</th>
      <th>LastHireDate</th>
      <th>LastInt</th>
      <th>FizzBuzz</th>
      <th>JobFactors</th>
      <th>ResumeUpdate</th>
      <th>CurrencySymbol</th>
      <th>CurrencyDesc</th>
      <th>CompTotal</th>
      <th>CompFreq</th>
      <th>ConvertedComp</th>
      <th>WorkWeekHrs</th>
      <th>WorkPlan</th>
      <th>WorkChallenge</th>
      <th>WorkRemote</th>
      <th>WorkLoc</th>
      <th>ImpSyn</th>
      <th>CodeRev</th>
      <th>CodeRevHrs</th>
      <th>UnitTests</th>
      <th>PurchaseHow</th>
      <th>PurchaseWhat</th>
      <th>LanguageWorkedWith</th>
      <th>LanguageDesireNextYear</th>
      <th>DatabaseWorkedWith</th>
      <th>DatabaseDesireNextYear</th>
      <th>PlatformWorkedWith</th>
      <th>PlatformDesireNextYear</th>
      <th>WebFrameWorkedWith</th>
      <th>WebFrameDesireNextYear</th>
      <th>MiscTechWorkedWith</th>
      <th>MiscTechDesireNextYear</th>
      <th>DevEnviron</th>
      <th>OpSys</th>
      <th>Containers</th>
      <th>BlockchainOrg</th>
      <th>BlockchainIs</th>
      <th>BetterLife</th>
      <th>ITperson</th>
      <th>OffOn</th>
      <th>SocialMedia</th>
      <th>Extraversion</th>
      <th>ScreenName</th>
      <th>SOVisit1st</th>
      <th>SOVisitFreq</th>
      <th>SOVisitTo</th>
      <th>SOFindAnswer</th>
      <th>SOTimeSaved</th>
      <th>SOHowMuchTime</th>
      <th>SOAccount</th>
      <th>SOPartFreq</th>
      <th>SOJobs</th>
      <th>EntTeams</th>
      <th>SOComm</th>
      <th>WelcomeChange</th>
      <th>SONewContent</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Trans</th>
      <th>Sexuality</th>
      <th>Ethnicity</th>
      <th>Dependents</th>
      <th>SurveyLength</th>
      <th>SurveyEase</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>I am a student who is learning to code</td>
      <td>Yes</td>
      <td>Never</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>Not employed, and not looking for work</td>
      <td>United Kingdom</td>
      <td>No</td>
      <td>Primary/elementary school</td>
      <td>NaN</td>
      <td>Taught yourself a new language, framework, or ...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>4</td>
      <td>10</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>HTML/CSS;Java;JavaScript;Python</td>
      <td>C;C++;C#;Go;HTML/CSS;Java;JavaScript;Python;SQL</td>
      <td>SQLite</td>
      <td>MySQL</td>
      <td>MacOS;Windows</td>
      <td>Android;Arduino;Windows</td>
      <td>Django;Flask</td>
      <td>Flask;jQuery</td>
      <td>Node.js</td>
      <td>Node.js</td>
      <td>IntelliJ;Notepad++;PyCharm</td>
      <td>Windows</td>
      <td>I do not use containers</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Yes</td>
      <td>Fortunately, someone else has that title</td>
      <td>Yes</td>
      <td>Twitter</td>
      <td>Online</td>
      <td>Username</td>
      <td>2017</td>
      <td>A few times per month or weekly</td>
      <td>Find answers to specific questions;Learn how t...</td>
      <td>3-5 times per week</td>
      <td>Stack Overflow was much faster</td>
      <td>31-60 minutes</td>
      <td>No</td>
      <td>NaN</td>
      <td>No, I didn't know that Stack Overflow had a jo...</td>
      <td>No, and I don't know what those are</td>
      <td>Neutral</td>
      <td>Just as welcome now as I felt last year</td>
      <td>Tech articles written by other developers;Indu...</td>
      <td>14.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>NaN</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Neither easy nor difficult</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>I am a student who is learning to code</td>
      <td>No</td>
      <td>Less than once per year</td>
      <td>The quality of OSS and closed source software ...</td>
      <td>Not employed, but looking for work</td>
      <td>Bosnia and Herzegovina</td>
      <td>Yes, full-time</td>
      <td>Secondary school (e.g. American high school, G...</td>
      <td>NaN</td>
      <td>Taken an online course in programming or softw...</td>
      <td>NaN</td>
      <td>Developer, desktop or enterprise applications;...</td>
      <td>NaN</td>
      <td>17</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>I am actively looking for a job</td>
      <td>I've never had a job</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Financial performance or funding status of the...</td>
      <td>Something else changed (education, award, medi...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>C++;HTML/CSS;Python</td>
      <td>C++;HTML/CSS;JavaScript;SQL</td>
      <td>NaN</td>
      <td>MySQL</td>
      <td>Windows</td>
      <td>Windows</td>
      <td>Django</td>
      <td>Django</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Atom;PyCharm</td>
      <td>Windows</td>
      <td>I do not use containers</td>
      <td>NaN</td>
      <td>Useful across many domains and could change ma...</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Instagram</td>
      <td>Online</td>
      <td>Username</td>
      <td>2017</td>
      <td>Daily or almost daily</td>
      <td>Find answers to specific questions;Learn how t...</td>
      <td>3-5 times per week</td>
      <td>Stack Overflow was much faster</td>
      <td>11-30 minutes</td>
      <td>Yes</td>
      <td>A few times per month or weekly</td>
      <td>No, I knew that Stack Overflow had a job board...</td>
      <td>No, and I don't know what those are</td>
      <td>Yes, somewhat</td>
      <td>Just as welcome now as I felt last year</td>
      <td>Tech articles written by other developers;Indu...</td>
      <td>19.0</td>
      <td>Man</td>
      <td>No</td>
      <td>Straight / Heterosexual</td>
      <td>NaN</td>
      <td>No</td>
      <td>Appropriate in length</td>
      <td>Neither easy nor difficult</td>
    </tr>
  </tbody>
</table>
</div>



selecionando a linha e coluna com **iloc**


```python
df.iloc[[0,1],10]
```




    0    Taught yourself a new language, framework, or ...
    1    Taken an online course in programming or softw...
    Name: EduOther, dtype: object



selecionando com **loc** podemos pegar as colunas por label


```python
df.loc[[0,1,2,3],['MiscTechWorkedWith','MiscTechDesireNextYear','DevEnviron']]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>MiscTechWorkedWith</th>
      <th>MiscTechDesireNextYear</th>
      <th>DevEnviron</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Node.js</td>
      <td>Node.js</td>
      <td>IntelliJ;Notepad++;PyCharm</td>
    </tr>
    <tr>
      <th>1</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>Atom;PyCharm</td>
    </tr>
    <tr>
      <th>2</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>Vim;Visual Studio Code</td>
    </tr>
    <tr>
      <th>3</th>
      <td>.NET</td>
      <td>.NET</td>
      <td>Eclipse;Vim;Visual Studio;Visual Studio Code</td>
    </tr>
  </tbody>
</table>
</div>

