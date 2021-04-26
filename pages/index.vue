<template>
  <div ref="getParentWidth" class="container parentWidth">
    <!--
    ********************************************
    //
    // header
    //
    ********************************************
    -->
    <header class="header">
      <div class="header_cluster sp">
        <div id="headerLogo" class="header_image">
          <a href="">
            <img src="~/assets/images/logo_concept_mark.svg" alt="" />
          </a>
        </div>
        <button
          id="headerButton"
          class="header_button sp"
          @click="toggleMenu()"
        >
          <span></span>
        </button>
      </div>
      <div class="header_image pc">
        <a href="">
          <img src="~/assets/images/logo_concept_mark.svg" alt="" />
        </a>
      </div>
      <nav id="nav" class="nav sp hidden">
        <ul class="nav_list">
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#theme'" to @click.native="toggleMenu()">
              テーマ
            </Nuxt-link>
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#concept'" to @click.native="toggleMenu()">
              コンセプト
            </Nuxt-link>
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#works'" to @click.native="toggleMenu()">
              展示作品
            </Nuxt-link>
          </li>
          <li class="nav_item">
            <Nuxt-link
              v-scroll-to="'#students'"
              to
              @click.native="toggleMenu()"
            >
              学生紹介
            </Nuxt-link>
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#video'" to @click.native="toggleMenu()">
              ビデオ
            </Nuxt-link>
          </li>
          <li class="nav_item">
            <Nuxt-link
              v-scroll-to="'#messages'"
              to
              @click.native="toggleMenu()"
            >
              メッセージ
            </Nuxt-link>
          </li>
          <li class="nav_item">
            <Nuxt-link
              v-scroll-to="'#prevention'"
              to
              @click.native="toggleMenu()"
            >
              ご来場の皆様へ
            </Nuxt-link>
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#access'" to @click.native="toggleMenu()">
              卒展の会場
            </Nuxt-link>
          </li>
        </ul>
      </nav>
      <nav id="nav" class="nav pc">
        <ul class="nav_list">
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#theme'" to class="link-theme"
              >テーマ</Nuxt-link
            >
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#concept'" to class="link-concept"
              >コンセプト</Nuxt-link
            >
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#works'" to class="link-works"
              >展示作品</Nuxt-link
            >
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#students'" to class="link-students"
              >学生紹介</Nuxt-link
            >
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#video'" to class="link-video"
              >ビデオ</Nuxt-link
            >
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#messages'" to class="link-messages"
              >メッセージ</Nuxt-link
            >
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#prevention'" to class="link-prevention"
              >ご来場の<br />皆様へ</Nuxt-link
            >
          </li>
          <li class="nav_item">
            <Nuxt-link v-scroll-to="'#access'" to class="link-access"
              >卒展の会場</Nuxt-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <!--
    ********************************************
    //
    // main
    //
    ********************************************
    -->
    <main class="main">
      <!-- kv -->
      <div id="kv" class="kv sec2">
        <div class="kv-right">
          <h1 class="title">
            <picture>
              <source
                media="(max-width: 899px)"
                srcset="~/assets/images/text_title_sp.svg"
              />
              <source
                media="(min-width: 900px)"
                srcset="~/assets/images/text_title_pc.svg"
              />
              <img
                src="~/assets/images/text_title_sp.svg"
                alt="卒業・進級制作展 2020 日本電子専門学校 Webデザイン科"
              />
            </picture>
          </h1>
          <div class="concept">
            <img
              src="~/assets/images/logo_concept_type.svg"
              alt="Co-Growing+"
            />
            <p>未来を創る</p>
          </div>
          <div class="schedule">
            <picture>
              <source
                media="(max-width: 899px)"
                srcset="~/assets/images/text_schedule_sp.svg"
              />
              <source
                media="(min-width: 900px)"
                srcset="~/assets/images/text_schedule_pc.svg"
              />
              <img
                src="~/assets/images/text_schedule_sp.svg"
                alt="2021年2月10日（水）11日（木）12日（金） 水・木13:00〜20:30 金10:00〜15:00 会場：日本電子専門学校7号館7階"
              />
            </picture>
          </div>
          <span class="scroll pc">Scroll </span>
        </div>
        <div class="kv-left">
          <div class="circle_cluster">
            <div class="circle -gradient">
              <div class="circle-in"></div>
            </div>
            <div class="circle -white">
              <div class="circle-in"></div>
            </div>
          </div>
        </div>
        <div class="kv-welcome">
          <picture>
            <source
              media="(max-width: 899px)"
              srcset="~/assets/images/text_welcome_sp.svg"
            />
            <source
              media="(min-width: 900px)"
              srcset="~/assets/images/text_welcome_pc.svg"
            />
            <img
              src="~/assets/images/text_welcome_sp.svg"
              alt="日本電子専門学校 Webデザイン科 卒業・進級制作展 CONNECT2020 2021年2月10日（水）11日（木）12日（金） 13:00〜20:30 ※最終日のみ10:00〜15:00"
            />
          </picture>
          <span class="scroll">Next </span>
        </div>
        <div class="lines pc">
          <div class="line line01"></div>
          <div class="line line02"></div>
          <div class="line line03"></div>
          <div class="line line04"></div>
          <div class="line line05"></div>
          <div class="line line06"></div>
          <div class="line line07"></div>
          <div class="line line08"></div>
          <div class="line line09"></div>
          <div class="line line10"></div>
          <!-- <div class="line line11"></div>
          <div class="line line12"></div>
          <div class="line line13"></div>
          <div class="line line14"></div>
          <div class="line line15"></div> -->
        </div>
      </div>

      <!-- theme -->
      <section id="theme" class="sec2 theme_section">
        <div class="sec2_inner -theme fadeUp">
          <div class="heading-wrapper">
            <h2 class="heading -lv2">
              <span class="fadeUp">テーマ</span>
              <!-- <span class="fadeUp">について</span> -->
            </h2>
          </div>
          <div class="card -theme">
            <div class="card-bg">
              <div class="card_image">
                <img src="~/assets/images/logo_theme.svg" alt="CONNECT" />
              </div>
              <p class="card_text">
                人は、コミュニケーションを通して人と繋がり、信頼関係が生まれていく。「CONNECT」には「物事を繋ぐ」という意味だけでなく「気持ちが通じる」という意味もあり、形では見えないこの繋がりを、Webデザイン科では常に大切にしています。学科の繋がり、1年生と2年生の繋がり、来場者との繋がりを展示会に来て感じてほしい。そして繋がりが生まれる場にしたい。私たちはそのような想いから「CONNECT」をテーマに掲げ、展示会を開催しています。
              </p>
            </div>
            <div v-prlx="{ speed: 0.1 }" class="circle -gradient">
              <div class="circle-in"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- concept -->
      <section id="concept" class="sec2 concept_section">
        <div class="sec2_inner -concept fadeUp">
          <div class="heading-wrapper">
            <h2 class="heading -lv2">
              <!-- <span class="fadeUp">今年度の</span> -->
              <span class="-color-gradient3">コンセプト</span>
            </h2>
          </div>
          <div class="card -concept">
            <div class="card-bg">
              <div class="column-grid">
                <div class="card_image">
                  <img
                    src="~/assets/images/logo_concept.svg"
                    alt="Co-Growing+"
                  />
                </div>
                <p class="card_text">
                  <span
                    >今年度のWebデザイン科卒業制作展2020のテーマは「Co-Growing+
                    －未来を創る－」です。「Co-Growing+」の「Co」には、私たちWebデザイン科がデザインを生み出すために大切してきた意味が込められています。</span
                  >
                  <span
                    >仲間と一緒に創る。<br />ユーザーと一緒に創る。<br />ステークホルダーと対話しながら創る。<br />技術を共有し、サービスを共に創る。<br />チームで新しい価値を生み出して創る。<br />人と共感し合い、信頼関係を築き、協力し合いながら新しい価値を生み出す。</span
                  >
                  <span>そして・・・<br />「未来を創る」</span>
                </p>
              </div>
              <div v-prlx="{ speed: 0.1 }" class="circle -gradient">
                <div class="circle-in"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- works -->
      <section id="works" class="sec2 works_section">
        <div class="bg-white">
          <div class="sec2_inner -works fadeUp">
            <div class="heading-wrapper">
              <h2 class="heading -lv2">
                <span class="-color-gradient3">展示作品</span>
                <!-- <span class="fadeUp">について</span> -->
              </h2>
            </div>
            <section class="works-grade_section -grade1">
              <div class="sec3_inner">
                <div class="fadeUp">
                  <h3 class="heading -lv3 -color-gradient3">1年生・進級制作</h3>
                  <div class="works_label -grade1">
                    <span>個人制作</span>
                  </div>
                  <p class="works_text">
                    実践に近い形を想定した5つの企業課題から1つを選択し、企業様にご指導をいただきながら、企画から実装まで制作に取り組みました。
                  </p>
                </div>
                <ul class="works_list">
                  <li
                    v-for="(workData, idx_grade1) in worksData.grade1"
                    :key="idx_grade1"
                    class="works_item fadeUp"
                  >
                    <div class="column-flex">
                      <div class="column-flex_item">
                        <span class="heading -lv4 -color-gradient3">
                          {{ workData.title }}
                        </span>
                        <dl class="works-card">
                          <div class="works-card_item">
                            <dt>依頼内容</dt>
                            <dd>{{ workData.task }}</dd>
                          </div>
                          <div class="works-card_item">
                            <dt v-if="!(idx_grade1 === 1)">指導企業</dt>
                            <dd v-if="!(idx_grade1 === 1)">
                              <a :href="workData.companyUrl" target="_blank">
                                {{ workData.companyName }}
                              </a>
                            </dd>
                          </div>
                          <div class="works-card_item">
                            <dt>担当者</dt>
                            <dd
                              v-for="(person, idx_people) in workData.people"
                              :key="idx_people"
                            >
                              {{ person }}
                            </dd>
                          </div>
                          <div class="works-card_item">
                            <dt><span>制作者</span></dt>
                            <dd
                              v-for="(
                                member, idx_grade1_members
                              ) in workData.members"
                              :key="idx_grade1_members"
                            >
                              {{ member }}
                            </dd>
                          </div>
                        </dl>
                        <div
                          v-prlx="{
                            reverse: true,
                            speed: 0.15,
                            fromBottom: true,
                          }"
                          class="circle -gradient2 pc"
                        >
                          <div class="circle-in"></div>
                        </div>
                      </div>
                      <div class="column-flex_item pc">
                        <img
                          :src="
                            require('~/assets/images/' +
                              workData.image +
                              '@2x.jpg')
                          "
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section class="works-grade_section -grade2 fadeUp">
              <div class="sec3_inner">
                <div>
                  <h3 class="heading -lv3 -color-gradient2">2年生・卒業制作</h3>
                  <div class="works_label -grade2">
                    <span>個人制作</span>
                    <span>チーム制作</span>
                  </div>
                  <p class="works_text">
                    学生自らクライアントを探し実案件に取り組みました。Webサイトに留まらずその制作は多岐にわたります。
                  </p>
                </div>
                <div class="works-indivisual">
                  <div class="works_label -grade2">
                    <span>個人制作</span>
                  </div>
                  <ul class="works_list -grade2">
                    <li
                      v-for="(workData, idx_grade2) in indivisualWorks"
                      :key="idx_grade2"
                      class="works_item"
                    >
                      <span class="heading -lv4 -color-gradient2">
                        {{ workData.title }}
                      </span>
                      <p>{{ workData.subTitle }}</p>
                      <dl>
                        <dt>制作者</dt>
                        <dd
                          v-for="(
                            member, idx_grade2_members
                          ) in workData.members"
                          :key="idx_grade2_members"
                        >
                          {{ member }}
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </div>
                <div class="works-team">
                  <div class="works_label -grade2">
                    <span>チーム制作</span>
                  </div>
                  <ul class="works_list -grade2">
                    <li
                      v-for="(workData, idx_grade2) in teamWorks"
                      :key="idx_grade2"
                      class="works_item"
                    >
                      <span class="heading -lv4 -color-gradient2">
                        {{ workData.title }}
                      </span>
                      <p>{{ workData.subTitle }}</p>
                      <dl>
                        <dt>制作者</dt>
                        <dd
                          v-for="(
                            member, idx_grade2_members
                          ) in workData.members"
                          :key="idx_grade2_members"
                        >
                          {{ member }}
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div class="window">
            <div class="window_cluster">
              <div
                v-prlx="{ reverse: true, speed: 0.1, fromBottom: true }"
                class="window_image"
              >
                <img src="~/assets/images/window_01.svg" alt="" />
              </div>
              <div
                v-prlx="{ reverse: true, speed: 0.3, fromBottom: true }"
                class="window_image"
              >
                <img src="~/assets/images/window_02.svg" alt="" />
              </div>
              <div
                v-prlx="{ reverse: true, speed: 0.2, fromBottom: true }"
                class="window_image"
              >
                <img src="~/assets/images/window_03.svg" alt="" />
              </div>
              <div
                v-prlx="{ reverse: true, speed: 0.35, fromBottom: true }"
                class="window_image"
              >
                <img src="~/assets/images/window_04.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- students -->
      <section id="students" class="sec2 students_section">
        <div id="js-students">
          <div class="sec2_inner -students">
            <div class="students-content">
              <div class="heading-wrapper">
                <h2 class="heading -lv2 -color-gradient4">
                  {{ studentsData.length }}名の学生たち
                </h2>
              </div>
              <ul class="students_list">
                <li
                  v-for="(studentData, idx_student) in studentsData"
                  :key="idx_student"
                  class="students_item"
                >
                  <button class="flip" @click="openModal(idx_student)">
                    <div class="flip-inner">
                      <div class="flip-front">
                        <img
                          :src="
                            require('~/assets/images/students/student_' +
                              studentData.id +
                              '.jpg')
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="flip-back pc"
                        :class="`grade${studentData.grade}`"
                      >
                        <p>{{ studentData.grade }}年生</p>
                        <p>{{ studentData.name }}</p>
                        <p>私は{{ studentData.workTitle.slice(0, 10) }}で…</p>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
              <div
                id="modal"
                class="modal"
                :aria-hidden="showModalContent ? 'false' : 'true'"
              >
                <!-- <div id="modal" class="modal hidden" @click="closeModal()"> -->
                <button class="modal-close sp" @click="closeModal()">
                  <span></span>
                </button>
                <div class="modal-content">
                  <button class="modal-close pc" @click="closeModal()">
                    <span></span>
                  </button>
                  <div class="modal-left">
                    <p class="modal-copy">
                      <span
                        >私は{{
                          studentsData[currentModalNum].workTitle
                        }}で、</span
                      >
                      <span>
                        {{ studentsData[currentModalNum].workMessages[0] }}、
                      </span>
                      <span>
                        {{ studentsData[currentModalNum].workMessages[1] }}
                      </span>
                    </p>
                    <img
                      :src="
                        require('~/assets/images/students/work_' +
                          studentsData[currentModalNum].id +
                          '.png')
                      "
                      alt=""
                    />
                    <p class="modal-title">
                      {{ studentsData[currentModalNum].workTitle }}
                    </p>
                    <p>期間：{{ studentsData[currentModalNum].workTerm }}</p>
                    <p class="modal-students">
                      参加学生：
                      <span
                        v-for="(workMember, idx_workMember) in studentsData[
                          currentModalNum
                        ].workMembers"
                        :key="idx_workMember"
                        >{{ workMember }}</span
                      >
                    </p>
                    <p>
                      {{ studentsData[currentModalNum].workSummary }}
                    </p>
                  </div>
                  <div class="modal-right">
                    <img
                      :src="
                        require('~/assets/images/students/student_' +
                          studentsData[currentModalNum].id +
                          '.jpg')
                      "
                      alt=""
                    />
                    <p class="modal-name">
                      {{ studentsData[currentModalNum].name }}
                    </p>
                    <p>希望職種／{{ studentsData[currentModalNum].job }}</p>
                    <p>
                      得意な技術／
                      <span
                        v-for="(skill, idx_skill) in studentsData[
                          currentModalNum
                        ].skills"
                        :key="idx_skill"
                        >{{ skill }}
                      </span>
                    </p>
                    <div class="modal-button">
                      <button
                        v-if="!(currentModalNum === 0)"
                        @click="prevModal()"
                      >
                        前の学生へ
                      </button>
                      <button
                        v-else-if="currentModalNum === 0"
                        @click="prevModal()"
                      >
                        前の学生へ
                      </button>
                      <button
                        v-if="!(currentModalNum === studentsData.length - 1)"
                        @click="nextModal()"
                      >
                        次の学生へ
                      </button>
                      <button
                        v-else-if="currentModalNum === studentsData.length - 1"
                        @click="nextModal()"
                      >
                        次の学生へ
                      </button>
                      <!-- <button
                        v-if="!(currentModalNum === 0)"
                        @click="prevModal()"
                      >
                        {{ studentsData[currentModalNum - 1].name }}
                      </button>
                      <button
                        v-else-if="currentModalNum === 0"
                        @click="prevModal()"
                      >
                        {{ studentsData[studentsData.length - 1].name }}
                      </button>
                      <button
                        v-if="!(currentModalNum === studentsData.length - 1)"
                        @click="nextModal()"
                      >
                        {{ studentsData[currentModalNum + 1].name }}
                      </button>
                      <button
                        v-else-if="currentModalNum === studentsData.length - 1"
                        @click="nextModal()"
                      >
                        {{ studentsData[0].name }}
                      </button> -->
                    </div>
                  </div>
                </div>
                <div class="modal-overlay" @click="closeModal()"></div>
              </div>
            </div>
            <div class="circle -gradient">
              <div class="circle-in"></div>
            </div>
            <div class="maru">
              <div class="maru-p">
                <img
                  src="~/assets/images/text_circle_01.svg"
                  alt="Co-Growing+"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- video -->
      <section id="video" class="sec2 video_section">
        <div class="sec2_inner -video">
          <div class="heading-wrapper">
            <h2 class="heading -lv2">ビデオ</h2>
          </div>
          <Slider />
          <ul class="video_list">
            <li class="video_item">
              <iframe
                class="youtube"
                src="https://www.youtube.com/embed/HySm5H1s4Yc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>準備編：進級制作</p>
            </li>
            <li class="video_item">
              <iframe
                class="youtube"
                src="https://www.youtube.com/embed/D0qS78pVIOY"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>準備編：卒業制作</p>
            </li>
            <li class="video_item">
              <iframe
                class="youtube"
                src="https://www.youtube.com/embed/s4jp5YzgWGk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>当日編：表彰式の様子</p>
            </li>
            <li class="video_item">
              <iframe
                class="youtube"
                src="https://www.youtube.com/embed/P276tggrmzE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>当日編：初日の様子</p>
            </li>
            <li class="video_item">
              <img
                class="youtube"
                src="~/assets/images/youtube_0211.png"
                alt="2月11日（木）公開予定"
              />
              <p>当日編：二日目の様子</p>
            </li>
            <li class="video_item">
              <img
                class="youtube"
                src="~/assets/images/youtube_0212.png"
                alt="2月12日（金）公開予定"
              />
              <p>当日編：最終日の様子</p>
            </li>
          </ul>
          <Slider />
        </div>
      </section>

      <!-- messages -->
      <section id="messages" class="sec2 messages_section">
        <div class="sec2_inner -messages">
          <div class="heading-wrapper">
            <h2 class="heading -lv2 -color-gradient3 fadeUp">
              先生からの<br class="sp" />メッセージ
            </h2>
          </div>
          <ul class="messages_list sp">
            <li
              v-for="(message, idx_messages) in messages"
              :key="idx_messages"
              class="messages_item"
            >
              <div class="messages-profile">
                <p>{{ message.name }}</p>
                <p>{{ message.position }}</p>
              </div>
              <div class="messages_image">
                <img
                  :src="require('~/assets/images/' + message.image + '_sp.jpg')"
                  alt=""
                />
              </div>
              <p v-if="!message.readMoreActivated" class="messages_text">
                {{ message.comment.slice(0, 101) | ellipsis }}
              </p>
              <p v-if="message.readMoreActivated" class="messages_text">
                {{ message.comment }}
              </p>
              <button
                class="messages_button"
                @click="toggleReadMore(idx_messages)"
              >
                {{ message.readMoreText }}
              </button>
            </li>
          </ul>
          <ul class="messages_list pc fadeUp">
            <li
              v-for="(message, idx_messages) in messages"
              :key="idx_messages"
              class="messages_item"
            >
              <div class="column-flex">
                <div class="column-flex_item">
                  <div class="messages-profile">
                    <p>{{ message.name }}</p>
                    <p>{{ message.position }}</p>
                  </div>
                  <p class="messages_text">
                    {{ message.comment }}
                  </p>
                </div>
                <div class="column-flex_item">
                  <div class="messages_image">
                    <img
                      :src="
                        require('~/assets/images/' + message.image + '_pc.jpg')
                      "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- prevention -->
      <section id="prevention" class="sec2 prevention_section">
        <div class="sec2_inner -prevention fadeUp">
          <div class="heading-wrapper">
            <h2 class="heading -lv2 -color-gradient3">
              ご来場の皆様へ<br class="sp" />お願い
            </h2>
          </div>
          <p class="prevention_text">
            新型コロナウイルス感染症の感染拡大防止のため、ご来場の際には、下記の点についてご理解、ご協力くださいますようお願いいたします。
          </p>
          <ol class="prevention_list">
            <li
              v-for="(item_prevention, idx_prevention) in prevention"
              :key="idx_prevention"
              class="prevention_item"
            >
              <p>{{ item_prevention.title }}</p>
              <ul>
                <li
                  v-for="(content, idx_contents) in item_prevention.contents"
                  :key="idx_contents"
                >
                  {{ content }}
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <!-- access -->
      <section id="access" class="sec2 access_section">
        <div class="sec2_inner -access fadeUp">
          <div class="heading-wrapper">
            <h2 class="heading -lv2 -color-gradient3">卒展の会場</h2>
          </div>
          <div class="access_image">
            <picture>
              <source
                media="(max-width: 899px)"
                srcset="~/assets/images/building_sp.png"
              />
              <source
                media="(min-width: 900px)"
                srcset="~/assets/images/building_pc.png"
              />
              <img src="~/assets/images/building_sp.png" alt="" />
            </picture>
            <div v-prlx="{ speed: 0.3 }" class="circle -gradient">
              <div class="circle-in"></div>
            </div>
          </div>

          <div class="access_cluster">
            <div class="access-schedule">
              <img
                src="~/assets/images/text_access.svg"
                alt="2021年2月10日（水）13:00〜20:30 11日（木）13:00〜20:30 12日（金）10:00〜15:00 日本電子専門学校7号館7階"
              />
            </div>
            <div class="access-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12960.453476666986!2d139.696522!3d35.6988277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d8d693684456a0!2z5pel5pys6Zu75a2Q5bCC6ZaA5a2m5qCh77yX5Y-36aSo!5e0!3m2!1sja!2sjp!4v1609999876205!5m2!1sja!2sjp"
                width="auto"
                height="300px"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div id="fin" class="fin sec2">
        <div class="fin_image">
          <img src="~/assets/images/logo_concept.svg" alt="Co-Growing" />
        </div>
        <div class="maru2"></div>
        <div class="maru2-p">
          <img src="~/assets/images/text_circle_02.svg" alt="未来を創る" />
        </div>
      </div>
    </main>
    <!--
    ********************************************
    //
    // footer
    //
    ********************************************
    -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import worksData from '@/assets/json/works.json'
import studentsData from '@/assets/json/students.json'

export default {
  name: 'Animation',
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 100) {
        return value.slice(0, 100) + '…'
      }
      return value
    },
  },

  data() {
    return {
      worksData,
      studentsData,

      currentModalNum: 0,
      showModalContent: false,
      scrollPosition: 0,

      messages: [
        {
          name: '小山内 靖美',
          position: 'Webデザイン科 学科長',
          image: 'teacher_01',
          readMoreActivated: false,
          readMoreText: 'もっと見る',
          comment:
            '今年度のWebデザイン科卒業制作展2020のテーマは「Co-Growing+　－未来を創る－」です。「Co-Growing+」の「Co」には、今年度のWebデザイン科の学生たちがデザインを生み出すために大切してきた意味が込められています。昨今、Co-creation ・Co-design・Co-production・Co-Empathy・・等々、さまざまな文脈でCo-（共に）という単語を多く耳にしますが、「共に」「一緒に」「仲間」という意味の「Co」を大切にしながら、課題解決に取り組んできました。ユーザーと一緒に課題と向き合いながら価値を生み出すことの大切さをベースにものづくりに励み、時に、産学連携授業やプロジェクトなどのチーム制作を通して、チームメンバーと同じテーマを共有し、議論できる関係性をつくる。さらに、自分の技術やスキルだけでは価値を生み出すことができない未熟なところを、仲間や後輩、先輩、先生と一緒に励みつつ、卒業生や企業様に評価やアドバイスをいただきながら、他者と連携、協力しながらものづくりに取り組んできました。まさに、Co-の関係性を築きながら、よりよい社会を創ることを目標に掲げて学んできました。その発表の場となるのが『進級＆卒業制作展CONNECT2020』です。\nオリンピック・パラリンピック開催の期待を胸に始まった2020年は、コロナ禍による大きな社会変動のうねりの年に様変わりしています。日本の経済はどう推移し、ビジネスの在り方や働き方、学び方はどう変化していくのか？様々な変化に対応しながら、私たちの未来を考え、その社会で暮らす人にとって、新たな魅力ある社会を創るためにはどうしたらよいか？を考え、学び続けるWebデザイン科67名の学生たち。\n急激な学びの環境の変化の中で、互いに励まし高め合いながら努力を重ね、気持ちを込めて制作した作品が展示されております。未熟な点もあるかと思いますが、それぞれの作品から次なる挑戦に向けて動き出そうとする学生たちの「Growing(成長)」を感じ取っていいただければ幸いです。\n新型コロナウイルスの感染拡大が憂慮される中においても、感染防止対策を徹底しながら、2020年度の進級・卒業制作展を開催することを決定いたしました。対面型の実施の際には、ぜひ会場に足をお運びいただき、ぜひご高覧賜りますようお願い申し上げます。厳しい難しい状況の中で学生をご支援いただいた保護者様や地域や自治体、企業、卒業生の皆さんに厚く御礼を申し上げます。',
        },
        {
          name: '関根 慎二',
          position: 'Webデザイン科 1年担当',
          image: 'teacher_02',
          readMoreActivated: false,
          readMoreText: 'もっと見る',
          comment:
            '今年度は世界中が混乱する中、6月に授業を開始し、学生の安全を第一に考えオンライン授業を中心に進めてきました。その中で、学生たちは環境の変化に対応し学ぶことを止めず努力を重ねてきました。授業やプロジェクトを通じて得た知識、技術を活かし、今回のテーマ「Co-Growing+　－未来を創る－」のように自分の目標に向け学び、成長を続けています。今年度、Web業界を目指し学び続けている67名の学生が制作した作品を展示会に足をお運び頂き、是非ご覧頂けますようお願い致します。',
        },
        {
          name: '森 尚通',
          position: 'Webデザイン科 2年担当',
          image: 'teacher_03',
          readMoreActivated: false,
          readMoreText: 'もっと見る',
          comment:
            '今年度、学生たちはこれまで幼少期より積み重ねてきた学び方から、新たな学び方へアップデートする必要に迫られることとなりました。毎日のなかで、先生やクラスメートと直接顔を合わせる機会は少なくとも、 オンラインでの授業、コミュニケーションに各種オンラインツールを駆使しながらコミュニケーションをとって、学びを深めてきました。本制作展では、この未曾有の事態にも臆せず、日々学生たちが努力を重ね、目標に向けて歩みを続けてきた成果となります。彼らの現在とこれからの可能性を作品を通じて感じ取っていただければ幸いです。',
        },
      ],

      prevention: [
        {
          title: '以下の症状等のある方につきましては、ご来館をお控えください',
          contents: [
            '発熱37.5°C以上、COVID-19の初期症状（発熱・寒気・悪寒・筋肉痛・頭痛・のどの痛み・味覚および嗅覚の異常）のある方。',
            '過去2週間以内に感染が引き続き拡大している国・地域への訪問歴がある方。',
            '体調がすぐれない方。',
          ],
        },
        {
          title: '来場の際には',
          contents: [
            'マスクの着用をお願いいたします。(特別な理由でマスクの着用ができない方は、お申し出ください)',
            'アルコール消毒液で手指の消毒を行ってください。',
            '会場入り口での検温の結果、発熱が疑われる場合は入館をご遠慮いただいております。',
          ],
        },
        {
          title: '会場内では',
          contents: ['ほかのお客様と十分な間隔を空けてご覧ください。'],
        },
        {
          title: '当展示での感染症対策',
          contents: [
            '入口付近にアルコール消毒液を設置しています。',
            '学生はマスクなどを着用して対応し、こまめな手指の消毒を徹底するとともに体調管理に十分な注意を払います。',
            '消毒液による定期的な清掃を行います。',
          ],
        },
      ],
    }
  },

  computed: {
    // works : indivisual or team
    indivisualWorks() {
      return this.worksData.grade2.filter((e) => {
        return e.members.length === 1
      })
    },
    teamWorks() {
      return this.worksData.grade2.filter((e) => {
        return !(e.members.length === 1)
      })
    },
  },

  mounted() {
    // set : device - width
    // this.getTargetWidth()
    // window.addEventListener('resize', this.getTargetWidth)

    // shuffle : studentsData
    studentsData.sort(function (a, b) {
      return Math.random() * 2 - 1
    })

    // options : IntersectionObserver
    const options1 = {
      root: null,
      rootMargin: '0px 0px -120px',
      threshold: 0,
    }
    const options2 = {
      root: null,
      rootMargin: '0px 0px -100%',
      threshold: 0,
    }
    const fadeUp = document.querySelectorAll('.fadeUp')
    fadeUp.forEach((target) => this.onIntersect(target, options1))
    const windowImage = document.querySelectorAll('.window_image')
    windowImage.forEach((target) => this.onIntersect(target, options1))
    const navIndex = document.querySelectorAll('.sec2')
    navIndex.forEach((target) => this.onIntersect2(target, options2))

    // scrollmagic : kv //================//
    // gsap timeline
    const kvTl = new this.$gsap.TimelineMax()
    const kvTween = kvTl
      .add([
        this.$gsap.TweenMax.to('#kv .kv-right', 1, { x: '+100%' }),
        this.$gsap.TweenMax.to('#kv .kv-left', 1, { x: '-100%', delay: 0.1 }),
        this.$gsap.TweenMax.to('#kv .lines', 1, { opacity: 0 }),
      ])
      .to('#kv .kv-welcome', 1, { opacity: 1 }, '-=0.9')
      .to('#kv .kv-welcome', 0.2, { opacity: 1 })
      .to('#kv .kv-welcome img', 1, { scale: 1.2, force3D: false })
    // scrollmagic
    new this.$scrollmagic.Scene({
      triggerElement: '#kv',
      duration: '280%',
      triggerHook: 'onLeave', 
    })
      .setPin('#kv')
      .setTween(kvTween)
      // .addIndicators()
      .addTo(this.$scrollmagic.Controller)

    // scrollmagic : maru //================//
    // gsap tween
    const maruTl = new this.$gsap.TimelineMax()
    const maruTween = maruTl
      .add([
        this.$gsap.TweenMax.to('#js-students .maru', 1, {
          scale: 34,
          force3D: false,
          opacity: 1,
          delay: 0.1,
        }),
        this.$gsap.TweenMax.to('#js-students .circle', 1, {
          scale: 12,
          force3D: false,
          opacity: 1,
        }),
        this.$gsap.TweenMax.to('#js-students .maru-p', 1, {
          scale: 26,
          force3D: false,
          delay: 0.1,
        }),
        this.$gsap.TweenMax.to('#js-students .maru-p', 0.1, { opacity: 1 }),
      ])
      .to('#js-students', 0.2, { backgroundColor: '#111e3c' })
      .to('#js-students .maru-p', 0.2, { opacity: 0 })
      .to('#js-students .circle', 0.3, { opacity: 0 })
      .to('.students-content', 0.05, { display: 'block', scale: 1 })
      .to('#js-students', 0.2, { opacity: 1 })
      .staggerTo('.students_item', 0.2, { display: 'block' })
      .staggerTo('#js-students', 0.7, { height: 'auto' })
    // scrollmagic
    new this.$scrollmagic.Scene({
      triggerElement: '#js-students',
      triggerHook: 'onLeave',
      duration: '460%',
    })
      .setPin('#js-students')
      .setTween(maruTween)
      .setClassToggle('.students_item', 'show')
      .addTo(this.$scrollmagic.Controller)

    // scrollmagic : maru2 //================//
    // gsap tween
    const maru2Tl = new this.$gsap.TimelineMax()
    const maru2Tween = maru2Tl
      .add([
        this.$gsap.TweenMax.to('#fin .maru2', 1, {
          scale: 30,
          force3D: false,
          opacity: 1,
        }),
        this.$gsap.TweenMax.to('#fin .circle', 1, {
          scale: 30,
          force3D: false,
          opacity: 1,
        }),
        this.$gsap.TweenMax.to('#fin .maru2-p', 1, {
          scale: 32,
          force3D: false,
        }),
        this.$gsap.TweenMax.to('#fin .maru2-p', 0.1, { opacity: 1 }),
      ])
      .to('#fin .maru2-p', 0.3, { opacity: 0 })
      .to('#fin .fin_image', 0.4, { opacity: 1, scale: 1.3 })
      // .to('#fin .students-content .date', 0.1, { opacity: 1, delay: 0.2 })
      .to('#fin', 0.2, { opacity: 1 })

    // scrollmagic
    new this.$scrollmagic.Scene({
      triggerElement: '#fin',
      duration: '350%',
      triggerHook: 'onLeave',
    })
      .setPin('#fin')
      .setTween(maru2Tween)
      // .addIndicators()
      .addTo(this.$scrollmagic.Controller)
  },

  methods: {
    // get : device - width
    // getTargetWidth() {
    //   const targetWidth = this.$refs.getParentWidth.clientWidth
    //   if (targetWidth < 900) {
    //     document.getElementById('students').classList.add('device=sp')
    //     document.getElementById('students').classList.remove('device=pc')
    //   }
    //   if (targetWidth >= 900) {
    //     document.getElementById('students').classList.add('device=pc')
    //     document.getElementById('students').classList.remove('device=sp')
    //   }
    // },
    // IntersectionObserver
    onIntersect(target, options1 = {}) {
      const observer = new IntersectionObserver(this.addShowClass, options1)
      observer.observe(target)
    },
    onIntersect2(target, options2 = {}) {
      const observer = new IntersectionObserver(this.setActiveIndex, options2)
      observer.observe(target)
    },
    addShowClass(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('show')
        }
      }
    },
    // IntersectionObserver - menu : sp
    setActiveIndex(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          this.activateIndex(e.target)
        }
      }
    },
    activateIndex(element) {
      const currentActiveIndex = document.querySelector(
        '.nav.pc .nav_list .nav_item a.active'
      )
      if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove('active')
      }
      const newActiveIndex = document.querySelector(`.link-${element.id}`)
      if (newActiveIndex === null) {
        return
      }
      newActiveIndex.classList.add('active')
      // const newActiveIndex = document.querySelector(`a[href='/${element.id}/']`)
    },
    // menu : sp
    toggleMenu() {
      document.getElementById('nav').classList.toggle('hidden')
      document.getElementById('headerLogo').classList.toggle('gray')
      document.getElementById('headerButton').classList.toggle('fullScreen')
    },
    // read more : sp
    toggleReadMore(index) {
      const target = this.messages[index]
      if (target.readMoreActivated === false) {
        target.readMoreActivated = true
        target.readMoreText = '閉じる'
      } else if (target.readMoreActivated === true) {
        target.readMoreActivated = false
        target.readMoreText = 'もっと見る'
      }
    },
    // modal
    openModal(index) {
      this.showModalContent = true
      this.currentModalNum = index
      document.body.style.top = `-${window.scrollY}px`
      this.scrollPosition = window.scrollY
      document.body.style.position = 'fixed'
    },
    closeModal() {
      this.showModalContent = false
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, this.scrollPosition || 0 * -1)
      document.querySelector('.modal-content').scrollTo(0, 0)
      document.querySelector('.modal-content .modal-left').scrollTo(0, 0)
    },
    prevModal() {
      document.querySelector('.modal-content').classList.add('prev')
      setTimeout(() => {
        if (!(this.currentModalNum === 0)) {
          this.currentModalNum--
        } else {
          this.currentModalNum = studentsData.length - 1
        }
        document.querySelector('.modal-content').scrollTo(0, 0)
        document.querySelector('.modal-content .modal-left').scrollTo(0, 0)
      }, 600)
      setTimeout(() => {
        document.querySelector('.modal-content').classList.remove('prev')
      }, 1200)
    },
    nextModal() {
      document.querySelector('.modal-content').classList.add('next')
      setTimeout(() => {
        if (!(this.currentModalNum === studentsData.length - 1)) {
          this.currentModalNum++
        } else {
          this.currentModalNum = 0
        }
        document.querySelector('.modal-content').scrollTo(0, 0)
        document.querySelector('.modal-content .modal-left').scrollTo(0, 0)
      }, 600)
      setTimeout(() => {
        document.querySelector('.modal-content').classList.remove('next')
      }, 1200)
    },
  },
}
</script>
