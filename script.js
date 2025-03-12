// 案例数据
const casesData = [
  {
    id: 'case001',
    title: '智能企业如何实现AI道德设计',
    company: 'TechCorp全球',
    category: 'tech',
    categoryName: '科技',
    summary: '一家全球科技企业如何在其AI产品开发中融入负责任创新原则，建立道德审查机制并持续监测社会影响。',
    image: 'images/case-thumbnails/case001.jpg',
    content: `
      <div class="mb-4">
        <img src="images/case-thumbnails/case001-full.jpg" class="img-fluid rounded" alt="案例封面">
      </div>
      
      <h4>背景</h4>
      <p>TechCorp是一家全球领先的科技企业，专注于人工智能和机器学习解决方案的开发。随着其AI产品在全球范围内的广泛应用，公司面临着如何确保技术道德、防止偏见、保护隐私的挑战。</p>
      
      <h4>挑战</h4>
      <ul>
        <li>如何识别和减少AI系统中的潜在偏见</li>
        <li>确保算法决策的透明度和可解释性</li>
        <li>在获取有价值数据的同时保护用户隐私</li>
        <li>预测并减轻AI技术可能带来的就业和社会影响</li>
      </ul>
      
      <h4>负责任创新方法</h4>
      <p>TechCorp采用了以下负责任创新的方法：</p>
      <ol>
        <li><strong>多元化AI道德委员会</strong>：建立由技术专家、伦理学家、社会学家和用户代表组成的跨学科委员会，监督产品开发。</li>
        <li><strong>算法影响评估</strong>：在产品开发早期阶段实施结构化评估，预测潜在影响并调整开发方向。</li>
        <li><strong>"道德设计冲刺"</strong>：在产品设计阶段引入专门的研讨会，挑战团队思考各种使用场景的潜在风险。</li>
        <li><strong>包容性测试计划</strong>：确保测试数据集和用户代表多元化，以识别不同群体可能面临的问题。</li>
        <li><strong>透明度报告框架</strong>：定期发布AI系统决策过程和潜在限制的详细说明。</li>
      </ol>
      
      <div class="row my-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">关键成功因素</h5>
              <ul class="card-text">
                <li>高层管理层的坚定承诺</li>
                <li>将道德考量纳入绩效评估</li>
                <li>持续的员工培训与意识提升</li>
                <li>与外部利益相关者的公开对话</li>
                <li>对失败和意外情况的透明沟通</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">关键挑战</h5>
              <ul class="card-text">
                <li>平衡创新速度与风险评估</li>
                <li>量化道德考量的商业价值</li>
                <li>应对全球不同地区的文化差异</li>
                <li>确保供应链合作伙伴的一致标准</li>
                <li>技术快速发展带来的新伦理问题</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h4>成果与影响</h4>
      <p>通过实施这些负责任创新措施，TechCorp取得了以下成果：</p>
      <ul>
        <li>产品中可测量的偏见减少了68%</li>
        <li>用户信任度提高了37%（根据年度调查）</li>
        <li>监管风险和相关合规成本降低</li>
        <li>吸引了更多关注道德问题的高素质人才</li>
        <li>被行业协会和政策制定者视为最佳实践案例</li>
      </ul>
      
      <h4>经验教训</h4>
      <p>TechCorp的经验表明，负责任的AI创新不仅是道德责任，也能带来商业价值。关键教训包括：</p>
      <ol>
        <li>道德考量应该是产品开发的内在组成部分，而非事后补救</li>
        <li>多元视角对于识别潜在问题至关重要</li>
        <li>建立明确的责任制和问责机制</li>
        <li>与用户和更广泛的社会保持开放对话</li>
        <li>将负责任创新视为持续旅程，而非一次性项目</li>
      </ol>
      
      <blockquote class="blockquote">
        <p>"我们认识到，真正的创新不仅仅是技术上的突破，还包括如何负责任地将这些技术融入社会。这不仅是正确的做法，从长远来看也是明智的商业决策。"</p>
        <footer class="blockquote-footer">Sarah Chen，TechCorp首席道德官</footer>
      </blockquote>
    `,
    pdfUrl: 'resources/cases/case001_full.pdf'
  },
  {
    id: 'case002',
    title: '可持续金融：绿色投资决策框架',
    company: '全球金融集团',
    category: 'finance',
    categoryName: '金融',
    summary: '一家国际金融机构如何开发透明、严谨的评估体系，确保投资决策兼顾财务回报与环境可持续性。',
    image: 'images/case-thumbnails/case002.jpg',
    content: `
      <div class="mb-4">
        <img src="images/case-thumbnails/case002-full.jpg" class="img-fluid rounded" alt="案例封面">
      </div>
      
      <h4>背景</h4>
      <p>全球金融集团是一家管理超过8000亿美元资产的金融机构，面对日益增长的绿色投资需求和气候相关财务风险，决定重新思考其投资决策框架。</p>
      
      <h4>挑战</h4>
      <ul>
        <li>平衡财务回报与环境、社会影响</li>
        <li>量化难以测量的可持续性指标</li>
        <li>防止"漂绿"行为，确保真实环境贡献</li>
        <li>适应全球各地不一致的监管环境</li>
        <li>说服传统投资者接受新框架</li>
      </ul>
      
      <h4>负责任创新方法</h4>
      <p>全球金融集团采用了以下方法：</p>
      
      <ol>
        <li><strong>全面ESG整合</strong>：在所有投资决策中系统性纳入环境、社会和治理因素，而非仅作为附加考量。</li>
        <li><strong>科学基础目标</strong>：采用科学基础的方法设定减排目标，与《巴黎协定》的1.5℃路径保持一致。</li>
        <li><strong>利益相关者咨询委员会</strong>：建立由投资者、环保组织、学术专家和社区代表组成的外部咨询机构。</li>
        <li><strong>双重影响评估</strong>：开发同时评估财务回报和环境影响的综合框架。</li>
        <li><strong>透明度承诺</strong>：承诺定期发布详细的气候相关财务披露报告。</li>
      </ol>
      
      <div class="row my-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">关键成功因素</h5>
              <ul class="card-text">
                <li>跨部门整合团队</li>
                <li>投资高质量数据与分析能力</li>
                <li>渐进实施策略</li>
                <li>投资专业人员的系统培训</li>
                <li>与监管机构的前瞻性沟通</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">主要挑战</h5>
              <ul class="card-text">
                <li>数据可用性与质量问题</li>
                <li>投资专业人员的初始抵抗</li>
                <li>平衡不同投资者群体的需求</li>
                <li>在缺乏监管的市场确保一致标准</li>
                <li>长期气候情景的不确定性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h4>创新工具：气候调整投资模型</h4>
      <p>该框架的核心是一个创新的气候调整投资模型，结合了：</p>
      <ol>
        <li>传统财务分析（贴现现金流、风险调整回报等）</li>
        <li>气候情景分析（评估不同温度路径的物理和转型风险）</li>
        <li>碳价格预测（根据不同监管情景）</li>
        <li>积极环境贡献因素（可再生能源产出、资源效率提升等）</li>
      </ol>
      
      <h4>成果与影响</h4>
      <p>新框架实施两年后，集团观察到以下成果：</p>
      <ul>
        <li>投资组合碳强度降低43%</li>
        <li>将500亿美元重新分配到低碳和气候适应型投资</li>
        <li>避免了估计价值8亿美元的搁浅资产风险</li>
        <li>在保持市场竞争力回报率的同时，提高了ESG评级</li>
        <li>吸引了150亿美元新的可持续导向投资者资金</li>
      </ul>
      
      <h4>经验教训与推广价值</h4>
      <p>该案例提供了以下关键经验：</p>
      <ol>
        <li>可持续性和财务业绩可以并行不悖，关键在于综合分析框架</li>
        <li>透明度和方法学严谨性对于建立可信度至关重要</li>
        <li>成功需要改变组织文化，而不仅仅是工具和政策</li>
        <li>内部技能建设与能力培养是长期成功的基础</li>
        <li>与外部利益相关者的持续对话有助于不断完善框架</li>
      </ol>
      
      <blockquote class="blockquote">
        <p>"负责任投资不再是利他主义的代名词。在气候变化的背景下，它已经成为明智风险管理和价值创造的核心。"</p>
        <footer class="blockquote-footer">Mark Johnson，全球金融集团可持续投资主管</footer>
      </blockquote>
    `,
    pdfUrl: 'resources/cases/case002_full.pdf'
  },
  {
    id: 'case003',
    title: '医疗技术的包容设计实践',
    company: '明康医疗技术',
    category: 'health',
    categoryName: '医疗健康',
    summary: '一家医疗设备公司如何通过参与式设计方法，确保其产品能够满足多元化患者群体的需求，特别关注边缘群体的可及性。',
    image: 'images/case-thumbnails/case003.jpg',
    content: `
      <div class="mb-4">
        <img src="images/case-thumbnails/case003-full.jpg" class="img-fluid rounded" alt="案例封面">
      </div>
      
      <h4>背景</h4>
      <p>明康医疗技术是一家专注于家用医疗监测设备的中型企业。在开发新一代智能血糖监测系统时，团队意识到现有产品主要为"标准用户"设计，忽视了老年人、视障人士、低教育水平和非城市用户等群体的需求与挑战。</p>
      
      <h4>挑战</h4>
      <ul>
        <li>如何理解和响应多元用户群体的特定需求</li>
        <li>在不牺牲产品核心功能的前提下确保易用性</li>
        <li>平衡先进功能与简单直观的操作体验</li>
        <li>在成本限制下实现包容性设计</li>
        <li>验证设计对不同群体的有效性</li>
      </ul>
      
      <h4>负责任创新方法</h4>
      <p>明康采用了以下负责任创新方法来应对这些挑战：</p>
      
      <ol>
        <li><strong>参与式设计研讨会</strong>：邀请不同年龄、教育水平、身体状况的糖尿病患者参与产品早期设计阶段，直接表达需求和困难。</li>
        <li><strong>边缘用户深度访谈</strong>：针对老年人、视障人士、农村用户等特定群体进行深入访谈，理解其独特挑战。</li>
        <li><strong>跨学科设计团队</strong>：组建包括设计师、工程师、医疗专业人员、社会学家和康复专家在内的多元团队。</li>
        <li><strong>原型迭代测试</strong>：开发多个原型版本，并与多元用户群体进行多轮测试与改进。</li>
        <li><strong>无障碍设计清单</strong>：建立并应用包容性设计标准，确保产品满足多元群体需求。</li>
      </ol>
      
      <div class="row my-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">设计创新点</h5>
              <ul class="card-text">
                <li>多模态反馈系统：结合视觉、听觉和触觉反馈</li>
                <li>可调节字体大小和高对比度界面</li>
                <li>简化操作模式与高级操作模式的切换选项</li>
                <li>语音辅助功能与图形化操作指导</li>
                <li>人体工学设计，便于握持和操作</li>
                <li>多语言支持和方言识别能力</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">参与式设计过程</h5>
              <ol class="card-text">
                <li>需求探索阶段：理解多元用户群体的特定挑战</li>
                <li>概念共创阶段：与用户共同发展设计概念</li>
                <li>原型评估阶段：多元用户测试与反馈</li>
                <li>迭代优化阶段：基于用户反馈持续改进</li>
                <li>上市后跟踪：收集真实使用数据持续优化</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <h4>成果与影响</h4>
      <p>通过这种包容性设计方法，明康的新一代血糖监测系统取得了以下成果：</p>
      
      <ul>
        <li>产品可用性测试中，老年用户成功率从之前产品的62%提升至91%</li>
        <li>低视力用户的操作效率提高了78%</li>
        <li>客户支持电话减少了45%，表明产品更加直观易用</li>
        <li>用户满意度评分从5分制的3.4分提升至4.6分</li>
        <li>市场份额在三年内扩大了28%，特别是在老年人和农村市场</li>
        <li>产品获得了国家级无障碍设计认证</li>
      </ul>
      
      <h4>商业价值</h4>
      <p>包容性设计不仅提升了社会价值，还带来了显著的商业回报：</p>
      <ul>
        <li>拓展了之前被忽视的市场细分，特别是老年人和农村市场</li>
        <li>降低了客户支持成本和产品退换率</li>
        <li>提升了品牌声誉和用户忠诚度</li>
        <li>获得医疗保险目录优先收录和政府采购项目青睐</li>
        <li>吸引了对社会责任敏感的投资者关注</li>
      </ul>
      
      <h4>经验教训</h4>
      <p>明康的包容性设计实践提供了以下关键启示：</p>
      <ol>
        <li>包容性设计并非"额外工作"，而应是设计过程的核心</li>
        <li>直接让多元用户参与设计过程，而非仅依赖于假设</li>
        <li>跨学科团队能带来更全面的设计洞察</li>
        <li>包容性设计可以创造更好的产品体验，惠及所有用户</li>
        <li>将包容性视为创新驱动力，而非合规负担</li>
      </ol>
      
      <blockquote class="blockquote">
        <p>"当我们真正倾听并理解那些被传统设计忽视的用户时，我们不仅创造了更具包容性的产品，还发现了创新的新方向。包容性设计最终让我们的产品对所有人都更好用。"</p>
        <footer class="blockquote-footer">张丽，明康医疗技术设计主管</footer>
      </blockquote>
    `,
    pdfUrl: 'resources/cases/case003_full.pdf'
  },
  {
    id: 'case004',
    title: '循环经济：零售供应链重塑',
    company: '永续零售集团',
    category: 'retail',
    categoryName: '零售',
    summary: '一家全球零售巨头如何重新设计其供应链，减少包装废弃物，建立产品回收系统，同时提高运营效率与顾客满意度。',
    image: 'images/case-thumbnails/case004.jpg',
    content: `
      <div class="mb-4">
        <img src="images/case-thumbnails/case004-full.jpg" class="img-fluid rounded" alt="案例封面">
      </div>
      
      <h4>背景</h4>
      <p>永续零售集团是一家拥有1000多家门店的跨国零售企业。随着消费者对可持续产品的需求增加和塑料污染问题日益严重，公司决定彻底重塑其供应链，转向循环经济模式。</p>
      
      <h4>挑战</h4>
      <ul>
        <li>减少一次性包装同时保证产品质量和便利性</li>
        <li>说服供应商转向可持续材料和设计</li>
        <li>建立经济可行的产品回收和再利用系统</li>
        <li>保持或降低运营成本</li>
        <li>教育消费者并改变其购物习惯</li>
      </ul>
      
      <h4>负责任创新方法</h4>
      <p>永续零售集团采用了以下循环经济方法：</p>
      
      <ol>
        <li><strong>设计阶段干预</strong>：与供应商合作，重新设计产品和包装，减少材料使用、提高可回收性。</li>
        <li><strong>供应商激励计划</strong>：建立评分系统和经济激励措施，鼓励供应商采用更可持续的材料和生产方法。</li>
        <li><strong>消费者参与机制</strong>：开发容器归还奖励计划和智能手机应用，使消费者参与到循环系统中。</li>
        <li><strong>逆向物流系统</strong>：建立完整的产品和包装回收网络，将店面转变为回收点。</li>
        <li><strong>创新合作伙伴关系</strong>：与回收企业、初创公司和研究机构合作开发再生材料新技术。</li>
      </ol>
      
      <div class="row my-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">循环创新项目</h5>
              <ul class="card-text">
                <li>零包装区：顾客自带容器购物</li>
                <li>包装服务站：以最小化材料提供包装</li>
                <li>可重复使用容器计划：押金制容器系统</li>
                <li>产品再制造计划：维修和更新旧产品</li>
                <li>剩余物转化计划：将有机废物转化为新产品</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">利益相关者参与</h5>
              <ul class="card-text">
                <li>供应商研讨会和创新实验室</li>
                <li>消费者焦点小组和行为研究</li>
                <li>地方政府合作项目</li>
                <li>行业协会标准制定</li>
                <li>社区教育计划</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h4>成果与影响</h4>
      <p>三年实施期后，永续零售集团实现了以下成果：</p>
      
      <ul>
        <li>一次性包装使用减少52%</li>
        <li>整体废弃物减少35%</li>
        <li>85%的店面设立了产品回收点</li>
        <li>客户参与率达到42%（超过初始目标的两倍）</li>
        <li>供应链碳足迹减少28%</li>
        <li>循环产品销售额增长63%</li>
      </ul>
      
      <h4>商业价值</h4>
      <p>循环经济转型为公司带来了多方面的商业价值：</p>
      <ul>
        <li>包装和物流成本降低18%</li>
        <li>客户忠诚度提高，重复购买率增加23%</li>
        <li>吸引了环保意识强的新客户群体</li>
        <li>提前适应即将出台的塑料包装法规</li>
        <li>品牌声誉和ESG评级显著提升</li>
        <li>通过废物减少和材料再利用创造新收入流</li>
      </ul>
      
      <h4>经验教训与关键见解</h4>
      <p>永续零售集团的案例提供了以下关键经验：</p>
      <ol>
        <li>循环经济转型需要系统性思维和价值链协作</li>
        <li>消费者接受度是成功的关键，需要通过教育和激励措施培养</li>
        <li>短期投资是必要的，但中长期经济回报明显</li>
        <li>数据跟踪和透明度对于持续改进至关重要</li>
        <li>灵活试点与快速迭代比完美计划更有效</li>
      </ol>
      
      <blockquote class="blockquote">
        <p>"循环经济不仅仅是环保责任，它是一种更聪明的商业模式。通过重新思考资源使用方式，我们同时为客户、企业和地球创造了价值。这不是选择题，这是未来零售的必然趋势。"</p>
        <footer class="blockquote-footer">李明，永续零售集团可持续发展副总裁</footer>
      </blockquote>
    `,
    pdfUrl: 'resources/cases/case004_full.pdf'
  },
  {
    id: 'case005',
    title: '社区参与的可再生能源项目',
    company: '新能源发展公司',
    category: 'energy',
    categoryName: '能源环保',
    summary: '一家能源公司如何通过创新的社区参与模式，在开发风电场项目时确保当地社区的参与、收益分享和环境保护的平衡。',
    image: 'images/case-thumbnails/case005.jpg',
    content: `
      <div class="mb-4">
        <img src="images/case-thumbnails/case005-full.jpg" class="img-fluid rounded" alt="案例封面">
      </div>
      
      <h4>背景</h4>
      <p>新能源发展公司是一家专注于可再生能源开发的中型企业。在计划于某农村地区建设大型风电场时，公司面临着当地社区的抵制，主要担忧包括视觉影响、噪音污染、土地使用变化以及当地经济收益有限。</p>
      
      <h4>挑战</h4>
      <ul>
        <li>减少社区对风电场的抵制，获取社会许可</li>
        <li>确保当地社区能够公平分享项目收益</li>
        <li>尊重当地文化和环境敏感区域</li>
        <li>在商业可行性和社区需求之间找到平衡</li>
        <li>建立长期可持续的社区参与模式</li>
      </ul>
      
      <h4>负责任创新方法</h4>
      <p>新能源发展公司设计了一种创新的社区参与模式：</p>
      
      <ol>
        <li><strong>共同设计流程</strong>：邀请社区代表参与项目选址和设计，尊重当地传统和环境敏感区。</li>
        <li><strong>社区能源共享计划</strong>：建立机制使当地社区分享风电场10-15%的所有权和收益。</li>
        <li><strong>社区发展基金</strong>：将项目收益的3%投入社区发展基金，用于当地基础设施、教育和环保项目。</li>
        <li><strong>本地价值链整合</strong>：优先考虑当地企业和劳动力，创造就业机会和技能培训。</li>
        <li><strong>环境监测委员会</strong>：由社区成员、生态专家和公司代表组成的委员会共同监测项目环境影响。</li>
      </ol>
      
      <div class="row my-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">参与式治理结构</h5>
              <ul class="card-text">
                <li>社区咨询委员会：项目决策参与权</li>
                <li>年度公开大会：透明报告和反馈机制</li>
                <li>社区股东代表：在项目公司董事会中的席位</li>
                <li>青年参与计划：培养下一代参与者</li>
                <li>定期家访和社区活动：维持双向沟通</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">收益分享机制</h5>
              <ul class="card-text">
                <li>社区能源合作社：集体持股模式</li>
                <li>能源账单折扣：当地居民用电优惠</li>
                <li>土地租赁支付：给土地所有者的补偿</li>
                <li>社区发展项目：基础设施和服务改善</li>
                <li>能源技能培训：为当地居民提供就业路径</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h4>创新成果</h4>
      <p>通过这种参与式方法，项目取得了以下成果：</p>
      
      <ul>
        <li>从最初的强烈反对到获得80%的社区支持率</li>
        <li>项目规划阶段缩短了6个月，减少了延误和冲突成本</li>
        <li>300多名当地居民成为社区能源合作社成员</li>
        <li>创造了45个长期就业岗位和120个建设期临时岗位</li>
        <li>100多户家庭能源成本降低了约20%</li>
        <li>社区发展基金资助了5个当地项目，包括学校太阳能系统、社区中心改造和自然保护区</li>
      </ul>
      
      <h4>商业与社会价值</h4>
      <p>这种参与式模式为多方创造了价值：</p>
      <ul>
        <li><strong>对公司的价值</strong>：减少了争议和延误，降低了法律和声誉风险，提高了项目成功率和盈利能力</li>
        <li><strong>对社区的价值</strong>：经济收益、能源安全、技能发展、基础设施改善和社区自主权</li>
        <li><strong>对行业的价值</strong>：创建了可复制的社区参与模式，有助于加速可再生能源部署</li>
        <li><strong>对环境的价值</strong>：通过社区监督确保更好的环境保护，增强生态系统恢复力</li>
      </ul>
      
      <h4>关键经验</h4>
      <p>新能源发展公司的案例提供了以下关键经验：</p>
      <ol>
        <li>真正的社区参与必须从项目最早期阶段开始</li>
        <li>收益分享必须公平、透明且结构化</li>
        <li>需要建立适合当地情况的治理模式，而非照搬标准方案</li>
        <li>投资社区能力建设是长期成功的关键</li>
        <li>经济、社会和环境目标可以并行不悖</li>
      </ol>
      
      <blockquote class="blockquote">
        <p>"可再生能源转型不仅是技术问题，更是社会问题。真正的可持续发展需要建立在社区参与和共同受益的基础上。我们的经验表明，这不仅是正确的做法，也是更明智的商业决策。"</p>
        <footer class="blockquote-footer">王晓明，新能源发展公司社区关系总监</footer>
      </blockquote>
    `,
    pdfUrl: 'resources/cases/case005_full.pdf'
  },
  {
    id: 'case006',
    title: '数据隐私与价值创造的平衡',
    company: '数字服务平台',
    category: 'tech',
    categoryName: '科技',
    summary: '一家电子商务平台如何重新设计其数据收集与使用策略，在提供个性化服务的同时最大化用户隐私保护与控制权。',
    image: 'images/case-thumbnails/case006.jpg',
    content: `
      <div class="mb-4">
        <img src="images/case-thumbnails/case006-full.jpg" class="img-fluid rounded" alt="案例封面">
      </div>
      
      <h4>背景</h4>
      <p>数字服务平台是一家拥有超过1亿用户的电子商务和内容平台。随着用户对数据隐私的担忧日益增长和全球隐私法规的加强，公司面临重新思考其数据策略的挑战，既要保护用户隐私，又要维持业务的核心功能和收入模式。</p>
      
      <h4>挑战</h4>
      <ul>
        <li>在减少数据收集的同时维持个性化服务质量</li>
        <li>满足全球不同地区的隐私法规要求</li>
        <li>提供真正有意义的用户选择和控制</li>
        <li>保持广告收入同时尊重用户隐私偏好</li>
        <li>在公司内部建立"隐私优先"文化</li>
      </ul>
      
      <h4>负责任创新方法</h4>
      <p>数字服务平台开发了"透明隐私"框架，核心原则包括：</p>
      
      <ol>
        <li><strong>设计阶段隐私评估</strong>：在产品开发初期就进行隐私影响评估，采用"隐私设计"原则。</li>
        <li><strong>分层隐私控制</strong>：为用户提供细粒度的数据共享和使用控制，从基本到高级设置。</li>
        <li><strong>本地计算优先</strong>：尽可能在用户设备上进行数据处理，减少中央服务器数据收集需求。</li>
        <li><strong>数据最小化与自动过期</strong>：仅收集必要数据，并设定明确的数据保留期限和自动删除机制。</li>
        <li><strong>价值交换透明化</strong>：明确展示数据分享与服务体验之间的关系，让用户作出明智选择。</li>
      </ol>
      
      <div class="row my-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">技术创新</h5>
              <ul class="card-text">
                <li>联邦学习：在不共享原始数据的情况下训练AI模型</li>
                <li>差分隐私：添加精确噪声保护个体数据</li>
                <li>隐私保护分析：匿名化数据分析技术</li>
                <li>隐私计算环境：安全多方计算框架</li>
                <li>可验证的数据使用限制：技术强制的数据政策</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">用户体验创新</h5>
              <ul class="card-text">
                <li>隐私控制中心：统一、直观的设置界面</li>
                <li>上下文隐私选择：在相关场景中提供选项</li>
                <li>隐私影响可视化：展示数据使用的具体影响</li>
                <li>个性化与隐私平衡滑块：用户自定义平衡点</li>
                <li>隐私健康报告：定期提供数据使用状况摘要</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h4>组织变革</h4>
      <p>为支持新的隐私框架，公司进行了以下组织变革：</p>
      
      <ul>
        <li>任命首席隐私官，直接向CEO汇报</li>
        <li>建立跨部门隐私委员会，监督数据使用</li>
        <li>在每个产品团队中设立隐私专家角色</li>
        <li>将隐私指标纳入产品团队的绩效评估</li>
        <li>开展全公司隐私意识和技能培训</li>
        <li>建立独立的隐私审计和合规团队</li>
      </ul>
      
      <h4>成果与影响</h4>
      <p>新框架实施18个月后，平台观察到：</p>
      <ul>
        <li>用户信任度提升32%（根据年度用户调查）</li>
        <li>数据相关投诉减少78%</li>
        <li>平台活跃用户增长12%（超过行业平均水平）</li>
        <li>用户主动分享数据的意愿提高23%</li>
        <li>数据收集总量减少40%，数据质量却提高了</li>
        <li>满足GDPR等全球隐私法规的成本降低35%</li>
      </ul>
      
      <h4>商业模式适应</h4>
      <p>公司还开发了新的隐私友好型商业模式：</p>
      <ol>
        <li>上下文相关服务：根据即时行为而非长期档案提供建议</li>
        <li>隐私分层服务：为高隐私需求用户提供高级订阅选项</li>
        <li>隐私保护广告网络：创新的无标识符广告技术</li>
        <li>用户主导数据交换：用户可有选择地用数据换取明确收益</li>
        <li>聚合洞察产品：为合作伙伴提供高度匿名化的趋势数据</li>
      </ol>
      
      <h4>经验教训</h4>
      <p>数字服务平台的案例提供了以下关键经验：</p>
      <ol>
        <li>隐私与个性化并非零和博弈，创新技术可以两者兼得</li>
        <li>用户对数据使用的控制权提高了数据共享的意愿和质量</li>
        <li>隐私必须整合到产品开发流程和公司文化中</li>
        <li>透明度建立信任，而信任是数字业务的基础</li>
        <li>隐私创新可以成为竞争优势和差异化因素</li>
      </ol>
      
      <blockquote class="blockquote">
        <p>"我们发现当我们真正尊重用户的数据主权，不仅仅是法律合规，而是作为核心价值，业务实际上变得更强大。这不是妥协，而是重新定义了我们与用户的关系基础。"</p>
        <footer class="blockquote-footer">陈静，数字服务平台首席隐私官</footer>
      </blockquote>
    `,
    pdfUrl: 'resources/cases/case006_full.pdf'
  }
];

// 学习资源数据
const resourcesData = {
  academic: [
    { title: "负责任创新：理论与实践", author: "Stilgoe, J., Owen, R., & Macnaghten, P.", year: 2013, publication: "Research Policy, 42(9), 1568-1580", abstract: "本文提出了负责任研究与创新(RRI)的框架，基于四个维度：预见、反思性、包容性和响应性。作者通过深入分析这四个维度的理论基础与实践要求，阐述了如何将RRI原则融入创新过程，以确保科技发展符合社会期望与伦理标准。", downloadUrl: "resources/academic/stilgoe_responsible_innovation_2013.pdf" },
    { title: "商业环境中的负责任创新实践", author: "Voegtlin, C., & Scherer, A. G.", year: 2017, publication: "Journal of Business Ethics, 143(2), 227-243", abstract: "本研究探索了企业如何将负责任创新原则整合到商业实践中。通过分析31家跨国企业的案例，作者识别了五种关键实践模式：价值整合、利益相关者参与、预期治理、反思性评估和透明问责。研究表明，成功的负责任创新需要组织文化与结构的协同支持。", downloadUrl: "resources/academic/voegtlin_responsible_innovation_business_2017.pdf" },
    { title: "负责任创新的社会经济影响评估", author: "王明华, 李强, 张丽", year: 2022, publication: "科学学研究, 40(3), 458-467", abstract: "本文提出了一个综合性框架，用于评估负责任创新的社会经济影响。作者基于中国14个创新项目的实证研究，建立了包含经济效益、社会公平、环境可持续性和治理效能四个维度的多层次评估体系，并探讨了不同创新类型与影响模式间的关系。", downloadUrl: "resources/academic/wang_responsible_innovation_impact_2022.pdf" },
    { title: "价值敏感设计与负责任创新", author: "Friedman, B., & Hendry, D. G.", year: 2019, publication: "MIT Press", abstract: "本书系统阐述了价值敏感设计(VSD)的理论基础和实践方法，探讨了如何在技术设计初期就将人文价值观纳入考量。作者通过丰富案例展示了VSD如何支持负责任创新，特别是在人工智能、数据隐私和可持续技术等领域的应用。", downloadUrl: "resources/academic/friedman_value_sensitive_design_2019.pdf" },
    { title: "创业与负责任创新：小型企业的机遇与挑战", author: "Lubberink, R., Blok, V., van Ophem, J., & Omta, O.", year: 2017, publication: "Journal of Cleaner Production, 167, 1446-1456", abstract: "本研究通过对39家创新型中小企业的深入调查，分析了负责任创新原则在创业环境中的应用。研究发现，尽管中小企业面临资源限制，但其组织灵活性和与客户的紧密联系为实施负责任创新提供了独特优势。作者提出了适合创业情境的负责任创新实施路径。", downloadUrl: "resources/academic/lubberink_entrepreneurship_responsible_innovation_2017.pdf" }
  ],
  video: [
    { title: "负责任创新导论", presenter: "Sarah Wilson教授", institution: "剑桥大学", duration: "45分钟", description: "本视频系统介绍负责任创新的基本概念、历史发展与核心原则。Wilson教授通过生动的案例和清晰的框架，帮助观众理解为什么负责任创新在当代技术发展中变得至关重要，以及如何在实践中应用这些原则。特别适合对此领域初次接触的学习者。", url: "https://mooc.tsinghua.edu.cn/courses/responsible-innovation/intro", thumbnail: "resources/videos/responsible_innovation_intro_thumb.jpg" },
    { title: "AI伦理与负责任发展", presenter: "李明研究员", institution: "清华大学", duration: "60分钟", description: "本讲座深入探讨人工智能发展中的伦理挑战与负责任创新策略。李明研究员结合国内外AI发展态势，分析了算法偏见、隐私保护、透明度与问责制等关键问题，并提出了负责任AI创新的中国实践路径。讲座还包括三个典型AI企业案例分析。", url: "https://open.163.com/responsible-ai-development", thumbnail: "resources/videos/ai_ethics_thumb.jpg" },
    { title: "企业实践中的负责任创新案例", presenter: "John Davis", institution: "哈佛商学院", duration: "90分钟", description: "Davis教授深入分析了六个跨国企业实施负责任创新的案例，涵盖科技、医疗、金融等行业。通过详细解析这些企业如何将负责任创新原则转化为组织结构、流程和文化，提炼出可操作的实践框架。讲座特别强调了负责任创新如何转化为商业价值。", url: "https://www.icourse163.org/responsible-innovation-business", thumbnail: "resources/videos/business_cases_thumb.jpg" },
    { title: "可持续创新的商业模式", presenter: "Maria Garcia博士", institution: "鹿特丹管理学院", duration: "55分钟", description: "本视频课程探讨如何设计兼顾经济效益与可持续发展的创新商业模式。Garcia博士介绍了循环经济、共享经济、产品服务系统等新型商业模式的理论基础与实践案例，并提供了创新商业模式的设计方法与评估工具。", url: "https://www.xuetangx.com/sustainable-business-models", thumbnail: "resources/videos/sustainable_models_thumb.jpg" }
  ],
  tools: [
    { title: "负责任创新评估工具包", developer: "欧盟科研创新总署", type: "自评框架", description: "这套综合工具包包含自评问卷、审计清单和指标评估表，帮助组织系统评估其创新活动的负责任程度。工具包涵盖预见、反思、包容和响应四个维度，适合创新项目的不同阶段使用。中文版已根据中国创新环境进行了本地化调整。", components: ["自评问卷(50题)", "过程审计清单", "影响评估矩阵", "利益相关者映射工具"], downloadUrl: "resources/tools/responsible_innovation_assessment_toolkit.zip" },
    { title: "技术影响评估指南", developer: "美国工程院（中文版由中国工程院翻译调整）", type: "方法论指南", description: "这份详细指南提供了系统评估新技术潜在社会、环境和伦理影响的结构化方法。指南包括影响识别框架、风险分析矩阵和缓解策略开发工具，帮助技术开发者在早期阶段预测并应对可能的负面影响。", components: ["技术影响映射模板", "风险评估矩阵", "利益相关者分析工具", "缓解策略开发指南"], downloadUrl: "resources/tools/technology_impact_assessment_guide_cn.zip" },
    { title: "包容性设计工具集", developer: "微软设计团队（中国团队优化版）", type: "设计方法", description: "这套设计工具集旨在帮助产品团队创造更具包容性的创新。工具集包含用户多样性映射、无障碍设计指南、边缘用户案例分析和包容性测试方法，确保产品设计考虑不同能力、文化背景和社会经济条件的用户需求。", components: ["多样性角色卡", "包容性设计检查清单", "无障碍设计指南", "用户测试协议"], downloadUrl: "resources/tools/inclusive_design_toolkit_cn.zip" },
    { title: "伦理影响评估模板", developer: "IEEE全球倡议（中国电子学会合作版）", type: "评估框架", description: "这套伦理影响评估模板专为AI和数据密集型创新项目设计，帮助识别和应对潜在的伦理风险。模板涵盖透明度、公平性、隐私保护、安全性和问责制等关键维度，提供结构化的评估流程和缓解策略建议。", components: ["伦理风险识别模板", "评估指标体系", "案例分析示例", "治理建议"], downloadUrl: "resources/tools/ethical_impact_assessment_cn.zip" }
  ],
  community: [
    { title: "负责任研究与创新网络", type: "国际学术网络", focus: "跨学科研究与政策建议", description: "这个全球性网络连接了来自30多个国家的研究机构、大学和政策制定者，致力于推进负责任创新理论研究和实践应用。网络定期举办工作坊、会议和培训活动，并发布最新研究成果和政策建议。", partners: ["牛津大学", "清华大学", "欧盟委员会", "中国科学院"], contactPerson: "Prof. James Wilson", contactEmail: "contact@rri-network.org", website: "https://www.rri-network.org" },
    { title: "全球商业伦理网络", type: "企业联盟", focus: "商业实践中的道德标准", description: "这个由领先企业组成的联盟致力于在商业实践中推广道德标准和负责任创新。联盟成员共享最佳实践，共同开发行业标准，并提供培训和认证项目。特别关注数字技术、生物技术和金融创新等领域的伦理挑战。", partners: ["IBM", "阿里巴巴", "联合利华", "中国移动"], contactPerson: "李伟", contactEmail: "info@gben.org", website: "https://www.global-business-ethics.net" },
    { title: "可持续创新论坛", type: "多方利益相关者平台", focus: "可持续发展目标导向创新", description: "这个开放平台汇集了企业、创新者、投资者、政府和公民社会代表，共同推动实现可持续发展目标的创新解决方案。论坛组织黑客马拉松、挑战赛和投资对接活动，并维护创新项目数据库和资源库。", partners: ["联合国开发署", "世界经济论坛", "深创投", "腾讯公益"], contactPerson: "张明", contactEmail: "connect@siforum.org", website: "https://www.sustainable-innovation-forum.org" }
  ],
  policy: [
    { title: "《负责任研究与创新框架》", issuer: "欧盟委员会", year: 2020, scope: "研究资助与评估", description: "这份框架文件规定了欧盟"地平线欧洲"计划中的负责任创新原则和评估标准。文件详细阐述了如何将性别平等、公众参与、开放获取、伦理考量和科学教育等要素整合到研究与创新过程中。该框架已被多国科研资助机构采纳和本地化，包括中国国家自然科学基金委员会的相关政策。", keyPoints: ["六大RRI维度及实施指南", "项目评估与监测标准", "最佳实践案例", "国际合作原则"], downloadUrl: "resources/policy/eu_rri_framework_2020.pdf" },
    { title: "《人工智能伦理准则》", issuer: "OECD", year: 2019, scope: "AI开发与应用", description: "这套国际准则提供了人工智能负责任开发与应用的原则和政策建议。准则强调AI系统应当以人为本、透明可解释、安全可靠、公平无偏见，并尊重隐私和数据权利。中国作为参与国之一，已将这些原则融入国内AI治理框架。", keyPoints: ["五大AI伦理原则", "政策制定建议", "监管框架指南", "跨境数据流动原则"], downloadUrl: "resources/policy/oecd_ai_ethics_guidelines_2019.pdf" },
    { title: "《可持续金融分类方案》", issuer: "国际金融监管机构", year: 2021, scope: "投资与金融产品", description: "这份文件建立了判断经济活动和投资环境可持续性的统一标准。方案包括气候变化减缓、适应、水资源、循环经济、污染防治和生物多样性六大环境目标的详细技术筛选标准，为负责任金融创新提供了明确指引。中国绿色金融标准已与该国际标准实现部分趋同。", keyPoints: ["环境目标分类体系", "技术筛选标准", "最低社会保障要求", "信息披露框架"], downloadUrl: "resources/policy/sustainable_finance_taxonomy_2021.pdf" }
  ],
  education: [
    { title: "负责任创新与领导力", provider: "斯坦福大学", format: "在线课程", duration: "8周", description: "这门综合课程探讨了如何将负责任创新原则融入领导实践和组织文化。课程内容包括伦理决策框架、前瞻性思维方法、多元利益相关者管理和创新治理模式。课程采用案例教学、互动研讨和实践项目相结合的方式，特别适合创新领导者和高级管理人员。", modules: ["伦理领导力基础", "预见性治理", "包容性设计思维", "组织变革管理", "创新责任与问责"], url: "https://online.stanford.edu/responsible-innovation-leadership" },
    { title: "科技伦理与社会责任", provider: "麻省理工学院", format: "MOOC", duration: "6周", description: "这门大规模开放在线课程探讨了新兴技术的伦理维度和社会影响。课程涵盖人工智能、生物技术、数据科学和新材料等领域的案例，分析技术创新中的价值冲突、风险评估和治理挑战。课程由著名伦理学家和工程师共同讲授，已有中文字幕版本。", modules: ["技术与价值观", "风险与不确定性", "隐私与自主权", "公平与责任", "全球视角"], url: "https://www.edx.org/course/ethics-of-technology" },
    { title: "可持续商业创新", provider: "鹿特丹管理学院", format: "硕士课程", duration: "1学期", description: "这门研究生课程教授如何开发既能创造商业价值又能产生积极社会环境影响的创新。课程内容包括可持续商业模式设计、循环经济原则、影响测量方法和变革管理策略。课程采用项目式学习方法，学生需要为真实企业开发可持续创新解决方案。", modules: ["可持续价值创造", "循环商业模式", "社会创新理论", "共享经济设计", "影响投资"], url: "https://www.rsm.nl/msc/sustainable-business-innovation/" }
  ]
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 导航栏滚动效果
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
      backToTop.classList.add('active');
    } else {
      navbar.style.padding = '1rem 0';
      backToTop.classList.remove('active');
    }
  });
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      if (this.getAttribute('href') === '#') return;
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // 更新活动导航链接
        document.querySelectorAll('.nav-link').forEach(navLink => {
          navLink.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // 加载案例数据
  loadCases();
  
  // 搜索功能
  document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('caseSearch').value.toLowerCase();
    filterCases(searchTerm);
  });
  
  // 回车键搜索
  document.getElementById('caseSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = document.getElementById('caseSearch').value.toLowerCase();
      filterCases(searchTerm);
    }
  });
  
  // 筛选按钮功能
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      filterCases(null, filter);
    });
  });
  
  // 加载更多案例
  document.getElementById('loadMoreCases').addEventListener('click', function() {
    loadMoreCases();
  });
  
  // 案例详情模态框
  document.addEventListener('click', function(e) {
    const caseLink = e.target.closest('.case-link');
    if (caseLink) {
      e.preventDefault();
      const caseId = caseLink.getAttribute('data-id');
      openCaseModal(caseId);
    }
  });
  
  // 资源模态框
  document.querySelectorAll('[data-bs-target="#resourcesModal"]').forEach(link => {
    link.addEventListener('click', function() {
      const resourceType = this.getAttribute('data-type');
      openResourcesModal(resourceType);
    });
  });
  
  // 联系表单提交
  document.getElementById('submitContact').addEventListener('click', function() {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    if (name && email && subject && message && agreeTerms) {
      // 这里可以添加表单提交逻辑，例如使用服务端API存储数据
      
      // 模拟提交成功
      const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
      modal.hide();
      
      showToast('提交成功', '我们已收到您的消息，将尽快回复。');
      
      // 重置表单
      form.reset();
    } else {
      showToast('提交失败', '请填写所有必填字段并同意隐私政策。', 'error');
    }
  });
  
  // 返回顶部按钮
  document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// 加载案例数据
function loadCases(start = 0, limit = 4) {
  const caseContainer = document.getElementById('caseContainer');
  const casesToShow = casesData.slice(start, start + limit);
  
  if (start === 0) {
    caseContainer.innerHTML = '';
  }
  
  casesToShow.forEach(caseItem => {
    const caseElement = document.createElement('div');
    caseElement.className = 'col-md-6 col-lg-3 fade-in';
    caseElement.innerHTML = `
      <div class="card h-100 border-0 shadow-sm case-card">
        <div class="card-img-container position-relative overflow-hidden">
          <img src="${caseItem.image}" class="card-img-top case-image" alt="${caseItem.title}">
          <span class="badge case-category ${caseItem.category}">${caseItem.categoryName}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${caseItem.title}</h5>
          <p class="card-text small text-muted">${caseItem.company}</p>
          <p class="card-text">${caseItem.summary}</p>
          <a href="#" class="btn btn-sm btn-outline-primary case-link" data-id="${caseItem.id}">查看详情</a>
        </div>
      </div>
    `;
    caseContainer.appendChild(caseElement);
  });
  
  // 如果没有更多案例，隐藏加载更多按钮
  if (start + limit >= casesData.length) {
    document.getElementById('loadMoreCases').style.display = 'none';
  } else {
    document.getElementById('loadMoreCases').style.display = 'inline-block';
  }
}

// 加载更多案例
function loadMoreCases() {
  const currentCount = document.querySelectorAll('#caseContainer .col-md-6').length;
  loadCases(currentCount, 4);
}

// 过滤案例
function filterCases(searchTerm, categoryFilter = null) {
  let filteredCases = [...casesData];
  
  // 应用搜索过滤
  if (searchTerm) {
    filteredCases = filteredCases.filter(caseItem => 
      caseItem.title.toLowerCase().includes(searchTerm) || 
      caseItem.company.toLowerCase().includes(searchTerm) || 
      caseItem.summary.toLowerCase().includes(searchTerm) ||
      caseItem.categoryName.toLowerCase().includes(searchTerm)
    );
  }
  
  // 应用类别过滤
  if (categoryFilter && categoryFilter !== 'all') {
    filteredCases = filteredCases.filter(caseItem => caseItem.category === categoryFilter);
  }
  
  // 更新显示
  const caseContainer = document.getElementById('caseContainer');
  caseContainer.innerHTML = '';
  
  if (filteredCases.length === 0) {
    caseContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search" style="font-size: 3rem; color: #ccc;"></i>
        <h4 class="mt-3">未找到匹配的案例</h4>
        <p class="text-muted">请尝试其他搜索词或筛选条件</p>
      </div>
    `;
    document.getElementById('loadMoreCases').style.display = 'none';
  } else {
    filteredCases.slice(0, 4).forEach(caseItem => {
      const caseElement = document.createElement('div');
      caseElement.className = 'col-md-6 col-lg-3 fade-in';
      caseElement.innerHTML = `
        <div class="card h-100 border-0 shadow-sm case-card">
          <div class="card-img-container position-relative overflow-hidden">
            <img src="${caseItem.image}" class="card-img-top case-image" alt="${caseItem.title}">
            <span class="badge case-category ${caseItem.category}">${caseItem.categoryName}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${caseItem.title}</h5>
            <p class="card-text small text-muted">${caseItem.company}</p>
            <p class="card-text">${caseItem.summary}</p>
            <a href="#" class="btn btn-sm btn-outline-primary case-link" data-id="${caseItem.id}">查看详情</a>
          </div>
        </div>
      `;
      caseContainer.appendChild(caseElement);
    });
    
    // 如果筛选后的案例超过4个，显示加载更多按钮
    if (filteredCases.length > 4) {
      document.getElementById('loadMoreCases').style.display = 'inline-block';
      // 存储当前筛选条件，以便"加载更多"按钮使用
      document.getElementById('loadMoreCases').setAttribute('data-search', searchTerm || '');
      document.getElementById('loadMoreCases').setAttribute('data-filter', categoryFilter || 'all');
    } else {
      document.getElementById('loadMoreCases').style.display = 'none';
    }
  }
}

// 打开案例详情模态框
function openCaseModal(caseId) {
  const caseItem = casesData.find(item => item.id === caseId);
  
  if (!caseItem) return;
  
  document.getElementById('caseModalTitle').textContent = caseItem.title;
  document.getElementById('caseModalBody').innerHTML = caseItem.content;
  document.getElementById('caseModalDownload').setAttribute('href', caseItem.pdfUrl);
  
  const caseModal = new bootstrap.Modal(document.getElementById('caseModal'));
  caseModal.show();
}

// 打开资源模态框
function openResourcesModal(resourceType) {
  const resources = resourcesData[resourceType];
  const typeTitles = {
    academic: '学术文献',
    video: '视频课程',
    tools: '实践工具箱',
    community: '社区与组织',
    policy: '政策与标准',
    education: '课程与教育'
  };
  
  document.getElementById('resourcesModalTitle').textContent = typeTitles[resourceType];
  
  let content = '';
  
  switch (resourceType) {
    case 'academic':
      content = `
        <div class="list-group">
          ${resources.map(item => `
            <div class="list-group-item">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">${item.title}</h6>
                <small>${item.year}</small>
              </div>
              <p class="mb-1">${item.author}</p>
              <small class="text-muted">${item.publication}</small>
              <p class="mt-2">${item.abstract}</p>
              <div class="mt-2">
                <a href="${item.downloadUrl}" class="btn btn-sm btn-outline-primary" download>下载文献</a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;
      
    case 'video':
      content = `
        <div class="row g-4">
          ${resources.map(item => `
            <div class="col-md-6">
              <div class="card h-100">
                <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">主讲人: ${item.presenter}</p>
                  <p class="card-text">
                    <small class="text-muted">时长: ${item.duration}</small><br>
                    <small class="text-muted">机构: ${item.institution}</small>
                  </p>
                  <p class="card-text">${item.description}</p>
                  <a href="${item.url}" class="btn btn-sm btn-primary" target="_blank">观看视频</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;
      
    case 'tools':
      content = `
        <div class="list-group">
          ${resources.map(item => `
            <div class="list-group-item">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">${item.title}</h6>
                <span class="badge bg-primary">${item.type}</span>
              </div>
              <p class="mb-1">开发者: ${item.developer}</p>
              <p class="mb-2">${item.description}</p>
              <h6 class="mt-3 mb-2">包含组件:</h6>
              <ul class="small">
                ${item.components.map(component => `<li>${component}</li>`).join('')}
              </ul>
              <div class="mt-2">
                <a href="${item.downloadUrl}" class="btn btn-sm btn-outline-primary" download>下载工具包</a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;
      
    case 'community':
      content = `
        <div class="row g-4">
          ${resources.map(item => `
            <div class="col-md-12 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="card-title">${item.title}</h5>
                    <span class="badge bg-secondary">${item.type}</span>
                  </div>
                  <p class="card-text"><strong>关注领域:</strong> ${item.focus}</p>
                  <p class="card-text">${item.description}</p>
                  <div class="mt-3">
                    <h6>主要合作伙伴:</h6>
                    <p>${item.partners ? item.partners.join(', ') : '暂无信息'}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <p class="mb-0 small"><strong>联系人:</strong> ${item.contactPerson || '暂无'}</p>
                      <p class="mb-0 small"><strong>邮箱:</strong> ${item.contactEmail || '暂无'}</p>
                    </div>
                    <a href="${item.website}" class="btn btn-sm btn-outline-primary" target="_blank">访问网站</a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;
      
    case 'policy':
      content = `
        <div class="list-group">
          ${resources.map(item => `
            <div class="list-group-item">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">${item.title}</h6>
                <small>${item.year}</small>
              </div>
              <p class="mb-1">发布机构: ${item.issuer}</p>
              <p class="mb-1">适用范围: ${item.scope}</p>
              <p class="mb-2">${item.description}</p>
              <h6 class="mt-3 mb-2">关键要点:</h6>
              <ul class="small">
                ${item.keyPoints ? item.keyPoints.map(point => `<li>${point}</li>`).join('') : ''}
              </ul>
              <div class="mt-2">
                <a href="${item.downloadUrl}" class="btn btn-sm btn-outline-primary" download>下载文件</a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;
      
    case 'education':
      content = `
        <div class="row g-4">
          ${resources.map(item => `
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">提供方: ${item.provider}</p>
                  <p class="card-text">
                    <small class="text-muted">形式: ${item.format}</small><br>
                    <small class="text-muted">时长: ${item.duration}</small>
                  </p>
                  <p class="card-text">${item.description}</p>
                  <h6 class="mt-3 mb-2">主要模块:</h6>
                  <ul class="small">
                    ${item.modules ? item.modules.map(module => `<li>${module}</li>`).join('') : ''}
                  </ul>
                  <a href="${item.url}" class="btn btn-sm btn-primary mt-3" target="_blank">了解课程</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;
  }
  
  document.getElementById('resourcesModalBody').innerHTML = content;
  
  const resourcesModal = new bootstrap.Modal(document.getElementById('resourcesModal'));
  resourcesModal.show();
}

// 显示提示信息
function showToast(title, message, type = 'success') {
  const toastElement = document.getElementById('messageToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  
  // 根据类型设置样式
  if (type === 'error') {
    toastTitle.classList.add('text-danger');
    toastTitle.classList.remove('text-primary');
  } else {
    toastTitle.classList.add('text-primary');
    toastTitle.classList.remove('text-danger');
  }
  
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}