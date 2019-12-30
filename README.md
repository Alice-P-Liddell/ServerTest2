# ServerTest2



### 점수 등록하기
[POST] /users/scoreupdate

<pre>
{
  'score':00
}
</pre>

#### 성공 시
<pre>
{
  'message':'Updated your Best Score'
  'score':00
}
</pre>

#### 실패 시
<pre>
{
  'message':'400 Bad Request'
}
</pre>



### 점수 불러오기
[GET] /users/scoreload

<pre>
{
  'username':'hongildong',
  'score':00
}
</pre>

#### 성공 시
<pre>
{
  'username':'hongildong',
  'score':00
}
</pre>

#### 로그인 실패 시
<pre>
{
  'message':'Not Found Userdata'
}
</pre>

#### 기타 실패 시
<pre>
{
  'message':'400 Bad Request'
}
</pre>